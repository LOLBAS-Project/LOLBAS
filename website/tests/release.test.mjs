import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import { parse } from 'yaml';

const readWorkflow = (name) =>
  parse(
    readFileSync(
      new URL(`../../.github/workflows/${name}`, import.meta.url),
      'utf8',
    ),
  );
const site = readWorkflow('site.yml');
const legacy = readWorkflow('gh-pages.yml');
const canonical = 'LOLBAS-Project/LOLBAS';
const publicationContext = (overrides = {}) => ({
  vars: { ASTRO_PUBLISH_ENABLED: 'true' },
  github: {
    repository: canonical,
    ref: 'refs/heads/master',
    event_name: 'push',
    event: {
      repository: { fork: false },
      workflow_run: {
        conclusion: 'success',
        event: 'push',
        head_branch: 'master',
      },
    },
  },
  ...overrides,
});
// Conditions use the shared JavaScript/GitHub boolean-expression subset. Evaluate
// the parsed workflow expression, so a weakened workflow changes these results.
const enabled = (job, context) =>
  Boolean(
    runInNewContext(
      job.if.replace(/^\s*\$\{\{([\s\S]*)\}\}\s*$/, '$1'),
      context,
      { timeout: 100 },
    ),
  );
const action = (steps, name) =>
  steps.find((step) => step.uses?.startsWith(`${name}@`));

test('fork branch pushes build review artifacts while upstream feature pushes skip', () => {
  assert.deepEqual(site.on.push.branches, ['**']);
  assert.deepEqual(site.on.pull_request.branches, ['master']);
  for (const repository of [canonical, 'contributor/LOLBAS']) {
    for (const ref of ['refs/heads/master', 'refs/heads/feature']) {
      for (const event_name of ['push', 'pull_request', 'workflow_dispatch']) {
        const context = publicationContext();
        Object.assign(context.github, { repository, ref, event_name });
        assert.equal(
          enabled(site.jobs.build, context),
          event_name !== 'push' ||
            repository !== canonical ||
            ref === 'refs/heads/master',
        );
        if (repository !== canonical) {
          assert.equal(enabled(site.jobs.deploy, context), false);
          assert.equal(enabled(legacy.jobs.build, context), false);
        }
      }
    }
  }
});

test('only explicitly enabled canonical master push/manual runs may publish', () => {
  for (const optIn of [undefined, '', 'false', 'TRUE', 'true']) {
    for (const repository of [canonical, 'contributor/LOLBAS']) {
      for (const ref of [
        'refs/heads/master',
        'refs/heads/feature',
        'refs/tags/master',
      ]) {
        for (const event_name of [
          'push',
          'pull_request',
          'pull_request_target',
          'workflow_run',
          'workflow_dispatch',
        ]) {
          const context = publicationContext();
          context.vars.ASTRO_PUBLISH_ENABLED = optIn;
          Object.assign(context.github, { repository, ref, event_name });
          const allowed =
            optIn === 'true' &&
            repository === canonical &&
            ref === 'refs/heads/master' &&
            ['push', 'workflow_dispatch'].includes(event_name);
          assert.equal(
            enabled(site.jobs.deploy, context),
            allowed,
            JSON.stringify({ optIn, repository, ref, event_name }),
          );
        }
      }
    }
  }
});

test('pull requests validate without exposing publication secrets or write permissions', () => {
  assert.ok(site.on.pull_request);
  assert.equal(site.on.pull_request_target, undefined);
  assert.deepEqual(site.permissions, { contents: 'read' });
  for (const [name, job] of Object.entries(site.jobs)) {
    if (name === 'deploy') continue;
    assert.doesNotMatch(
      JSON.stringify(job),
      /secrets\.|actions-gh-pages|deploy-pages/,
    );
    assert.ok(!Object.values(job.permissions ?? {}).includes('write'));
  }
  assert.equal(site.jobs.deploy.environment.name, 'github-pages');
});

test('publication depends on a successful fully validated build', () => {
  assert.deepEqual([site.jobs.deploy.needs].flat(), ['build']);
  assert.doesNotMatch(site.jobs.deploy.if, /always\(|failure\(|cancelled\(/);
  assert.equal(site.jobs.build['continue-on-error'], undefined);
  const steps = site.jobs.build.steps;
  const required = [
    /yamllint -c \.github\/\.yamllint yml\/\*\*\//,
    /python(?:3)? \.github\/workflows\/validation\.py/,
    /npm run check/,
    /npm run test:data/,
    /npm run build/,
    /^npm test$/,
  ];
  const uploadIndex = steps.findIndex(
    (step) => step.with?.path === 'website/dist/',
  );
  assert.ok(uploadIndex >= 0);
  for (const command of required) {
    const index = steps.findIndex((step) => command.test(step.run ?? ''));
    assert.ok(
      index >= 0 && index < uploadIndex,
      `${command} must gate the artifact`,
    );
    assert.equal(steps[index]['continue-on-error'], undefined);
    assert.equal(steps[index].if, undefined);
  }
  assert.equal(steps[uploadIndex].if, undefined);
  assert.equal(steps[uploadIndex]['continue-on-error'], undefined);
  for (const step of steps.filter((item) =>
    /yamllint -c|validation\.py/.test(item.run ?? ''),
  )) {
    assert.equal(step['working-directory'], '.');
  }
});

test('publisher downloads exactly the tested artifact from its own run without rebuilding', () => {
  const upload = site.jobs.build.steps.find(
    (step) => step.with?.path === 'website/dist/',
  );
  const download = action(site.jobs.deploy.steps, 'actions/download-artifact');
  const publish = action(site.jobs.deploy.steps, 'peaceiris/actions-gh-pages');
  assert.ok(upload?.uses.startsWith('actions/upload-artifact@'));
  assert.equal(download.with.name, upload.with.name);
  assert.match(download.with.name, /github\.sha/);
  assert.match(download.with.name, /github\.run_attempt/);
  assert.equal(download.with['run-id'], undefined);
  assert.equal(download.with.repository, undefined);
  assert.equal(publish.with.publish_dir, download.with.path);
  assert.equal(
    publish.with.external_repository,
    'LOLBAS-Project/LOLBAS-Project.github.io',
  );
  assert.equal(publish.with.publish_branch, 'master');
  assert.equal(publish.with.destination_dir, undefined);
  assert.equal(publish.with.keep_files, false);
  assert.equal(publish.with.enable_jekyll, false);
  assert.match(publish.with.deploy_key, /secrets\.ACTIONS_DEPLOY_KEY/);
  assert.ok(
    site.jobs.deploy.steps.some(
      (step) =>
        /source-revision\.txt/.test(step.run ?? '') &&
        /GITHUB_SHA/.test(step.run),
    ),
  );
  assert.doesNotMatch(
    JSON.stringify(site.jobs.deploy.steps),
    /actions\/checkout|npm (?:ci|run build)/,
  );
});

test('legacy publisher is mutually exclusive and accepts only validated upstream pushes', () => {
  for (const optIn of [undefined, '', 'false', 'true']) {
    for (const conclusion of ['success', 'failure', 'cancelled', 'skipped']) {
      for (const event of ['push', 'pull_request', 'workflow_dispatch']) {
        for (const head_branch of ['master', 'feature']) {
          for (const fork of [false, true]) {
            for (const repository of [canonical, 'contributor/LOLBAS']) {
              const context = publicationContext();
              context.vars.ASTRO_PUBLISH_ENABLED = optIn;
              context.github.repository = repository;
              context.github.event.repository.fork = fork;
              context.github.event.workflow_run = {
                conclusion,
                event,
                head_branch,
              };
              const allowed =
                optIn !== 'true' &&
                conclusion === 'success' &&
                event === 'push' &&
                head_branch === 'master' &&
                !fork &&
                repository === canonical;
              assert.equal(
                enabled(legacy.jobs.build, context),
                allowed,
                JSON.stringify({
                  optIn,
                  conclusion,
                  event,
                  head_branch,
                  fork,
                  repository,
                }),
              );
              assert.ok(
                !(
                  enabled(legacy.jobs.build, context) &&
                  enabled(site.jobs.deploy, context)
                ),
              );
            }
          }
        }
      }
    }
  }
  const checkout = action(legacy.jobs.build.steps, 'actions/checkout');
  assert.equal(checkout.with.ref, '${{ github.event.workflow_run.head_sha }}');
  assert.equal(
    legacy.jobs.build.concurrency.group,
    site.jobs.deploy.concurrency.group,
  );
});
