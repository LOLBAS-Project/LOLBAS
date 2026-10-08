# LOLBAS website

The Astro site builds directly from the repository's `yml/` catalog. Edit those
YAML records to update the catalog; generated data and static output are build
products. The existing YAML lint and schema workflow remains a separate gate.

## Local development and verification

Use Node.js **22.22.0** and the committed npm lockfile. From the repository root:

```sh
cd website
npm ci
npm run check
npm run test:data
npm run build
npx playwright install chromium
npm test
npm run preview -- --port 4387
```

`check` regenerates catalog data and runs Astro's checks. `test:data` runs the
data and publication regression tests. `build` regenerates data, produces `dist/`, and verifies
the generated output. Playwright tests the production build through the preview
server on port 4388; run `build` before `test`. The live preview uses port 4387
so other workspaces can keep using the default Astro port. On Linux CI, install browser system dependencies
with `npx playwright install --with-deps chromium`.

For interactive development, run `npm run dev`. Run `npm run prepare:data` after
changing catalog YAML during an existing development session. Do not execute the
catalog's example commands: they are documentation rendered by the site.

## Charts and compatibility

The growth chart groups YAML `Created` dates by year and shows cumulative entries;
it is catalog growth, not observed threat activity. Function counts count entries
with a matching command; an entry can have multiple functions. Detection counts
include published links and exclude IOC-only records.

Legacy JSON fields, CSV columns, detail URLs/category anchors, the Navigator layer
and count badge remain available. Generated API files do not include UI metadata.
Search also accepts the legacy `/function` and `#type` syntax. Recently added
sorting uses the recorded `Created` date; it does not imply last-modified dates.

Every catalog column header toggles ascending/descending order. Function lists
and ATT&CK lists sort alphabetically and numerically respectively; detections
sort by published resource count. The dropdown, header indicators and URL share
one sort state. Older browsers retain native filter menus through progressive CSS.

## CI and publication boundary

`.github/workflows/site.yml` validates all fork branch pushes, upstream `master`
pushes, pull requests targeting `master`, and manual runs. Fork builds require
Actions to be enabled in the fork. They upload review artifacts and browser
evidence without publishing a site or needing deployment secrets. Download the
verified site from the run and serve the extracted directory with
`python3 -m http.server 8000` to preview it. It caches npm downloads, installs with `npm ci`, runs
checks and data tests, builds and verifies the site, and runs Chromium against
the production output. Only a successful run uploads the `verified-site` artifact
for publication. `source-revision.txt` records its source SHA. Browser evidence is
uploaded separately, including on test failure when evidence exists.

The UI also supports an optional Astro `SITE_BASE` (for example `/LOLBAS`) for
project-site previews. A separate fork-owned workflow can build with that value,
run the preview smoke test via `SITE_BASE=/LOLBAS npm test`, and publish to the
fork's Pages site. That preview publisher is intentionally outside this upstream
change. Canonical API export URLs remain unchanged in prefixed previews.

Publication defaults to **disabled**. The repository Actions variable
`ASTRO_PUBLISH_ENABLED` must equal the literal string `true`. The publisher also
requires the canonical `LOLBAS-Project/LOLBAS` repository, the `master` branch,
and either a push or manual dispatch. Pull requests and `workflow_run` events
cannot publish Astro output. The `github-pages` environment can require human
approval. Use a **repository variable**, not an environment variable, because
both workflow job conditions must see the switch before entering an environment.

The publisher downloads the tested artifact from the same workflow run and
verifies its recorded SHA. It does not rebuild. Using the existing
`ACTIONS_DEPLOY_KEY`, it replaces the root of the external repository
`LOLBAS-Project/LOLBAS-Project.github.io` on branch `master`, with Jekyll disabled.
This is an external-repository publication, not an `actions/deploy-pages` upload.

While the switch is unset or differs from `true`, the legacy Jekyll catalog
publisher remains enabled. It accepts only successful YAML-validation runs
originating from a push, checks out that validated run's exact SHA, and updates
the external repository's `_lolbas` directory. Both publishers share a deployment
concurrency group.

## Maintainer cutover and rollback

The following is a human-operated release procedure; local implementation and
review do not authorize a live publication.

1. Review the migration diff and independent release review, including catalog
   compatibility, URLs, production browser results, and the generated artifact.
   Confirm the master revision has passed both site and YAML/schema checks.
2. Back up the external repository's current `master` Jekyll source to a retained
   branch or tag and record its commit SHA. Preserve any custom domain, redirects,
   and other site assets needed after replacing the root. Confirm the external
   repository's Pages settings serve `master` from the root.
3. Configure the source repository's `github-pages` environment and desired
   required reviewers. Confirm the existing deploy key can write only to the
   intended external repository. Wait for pending legacy publications to finish.
4. Set the **repository Actions variable** `ASTRO_PUBLISH_ENABLED=true`, then
   manually run the site workflow on `master`. Review and approve the environment
   deployment if protection requires it. This publishes that run's tested artifact.
5. Check the live homepage, a legacy detail URL, search/filter behavior, API
   exports, and `source-revision.txt`. Retain the tested artifact and deployment
   evidence with the release record.

To roll back, unset `ASTRO_PUBLISH_ENABLED` (or set it to `false`) and cancel any
queued or running Astro deployment before restoring the external `master` branch
to the backed-up Jekyll source. Restore Pages/custom-domain settings if changed.
Verify the live legacy site, then allow future successful push-triggered YAML
validation runs to update `_lolbas` again. Merely unsetting the variable does not
restore the Jekyll files removed by the Astro root publication.

Required release review can be performed locally against workflows and build
evidence. Live deployment, repository-variable changes, environment changes, and
rollback operations are skipped during local validation and require a maintainer
to execute this release procedure.
