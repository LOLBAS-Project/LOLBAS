import { test, expect } from '@playwright/test';
import { loadCatalog } from '../scripts/prepare-data.mjs';
import type { CatalogEntry } from '../src/lib/catalog';
const source = (await loadCatalog()) as CatalogEntry[];
const techniqueCount = new Set(
  source.flatMap((e) => e.Commands.map((c) => c.MitreID)),
).size;

test('LOL-SITE-002 search, legacy syntax, sorting, pagination and URL state', async ({
  page,
}) => {
  await page.goto('/');
  const rows = page.locator('[data-row]:visible');
  await expect(rows).toHaveCount(25);
  await page.getByRole('button', { name: 'Next →' }).click();
  await expect(page.locator('#page-info')).toContainText('Page 2');
  await page.reload();
  await expect(page.locator('#page-info')).toContainText('Page 2');
  await page.getByRole('searchbox').fill('certutil');
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText('Certutil.exe');
  await page.locator('#category').selectOption('Download');
  await expect(rows).toHaveCount(1);
  await page.reload();
  await expect(page.getByRole('searchbox')).toHaveValue('certutil');
  await expect(page.locator('#category')).toHaveValue('Download');
  await expect(rows).toHaveCount(1);
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('searchbox').fill('/download certutil');
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText('Certutil.exe');
  await page.getByRole('searchbox').fill('/uac bypass');
  await expect(rows).not.toHaveCount(0);
  await expect(rows.first()).toContainText('UAC Bypass');
  await page.getByRole('searchbox').fill('#Script');
  await expect(rows).not.toHaveCount(0);
  for (const row of await rows.all())
    await expect(row).toHaveAttribute('data-type', 'Scripts');
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.locator('#sort').selectOption('newest');
  const dates = await rows.evaluateAll((rs) =>
    rs.map((r) => (r as HTMLElement).dataset.created!),
  );
  expect(dates).toEqual([...dates].sort().reverse());
  await page.locator('#sort').selectOption('commands');
  const counts = await rows.evaluateAll((rs) =>
    rs.map((r) => Number((r as HTMLElement).dataset.commands)),
  );
  expect(counts).toEqual([...counts].sort((a, b) => b - a));
  await page.getByRole('searchbox').fill('no-such-lolbas-zzzz');
  await expect(page.locator('#empty-state')).toBeVisible();
  await page.getByRole('button', { name: 'Clear all filters' }).click();
  await expect(rows).toHaveCount(25);
  await page.getByRole('searchbox').fill('certutil');
  await page.locator('.entry-name:visible').click();
  await expect(
    page.getByRole('heading', { name: 'Certutil.exe', exact: true }),
  ).toBeVisible();
});

test('LOL-SITE-002 combined technique/type/detection/date filters and chart deep links', async ({
  page,
}) => {
  await page.goto(
    '/?technique=T1105&type=Binaries&detection=yes&year=2018#catalog',
  );
  const rows = page.locator('[data-row]:visible');
  expect(await rows.count()).toBeGreaterThan(0);
  for (const row of await rows.all()) {
    await expect(row).toHaveAttribute('data-type', 'Binaries');
    await expect(row).toHaveAttribute('data-detection', 'yes');
    await expect(row).toHaveAttribute('data-created', /^2018/);
    await expect(row).toHaveAttribute('data-techniques', /T1105/);
  }
  await page.goto('/insights/');
  await page.locator('.growth-chart a').last().click();
  await expect(page.locator('#year-filter')).toContainText('Created in');
});

test('LOL-SITE-003 legacy detail anchor, content and copy command', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/lolbas/Binaries/Certutil/#download');
  await expect(
    page.getByRole('heading', { name: 'Certutil.exe', exact: true }),
  ).toBeVisible();
  await expect(page.locator('[id="download"]')).toBeVisible();
  await expect(page.locator('main')).toContainText(
    'C:\\Windows\\System32\\certutil.exe',
  );
  await expect(page.locator('main')).toContainText('Microsoft-CryptoAPI/10.0');
  const button = page.locator('[data-copy]').first();
  const value = await button.getAttribute('data-copy');
  await button.click();
  await expect(button).toHaveText('Copied ✓');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(value);
  await expect(
    page.locator('a[href*="yml/OSBinaries/Certutil.yml"]').first(),
  ).toBeVisible();
});

test('LOL-API-001 production API and Navigator retain legacy contracts', async ({
  request,
}) => {
  const data = await (await request.get('/api/lolbas.json')).json();
  expect(data).toHaveLength(source.length);
  expect(Object.keys(data[0])).toEqual([
    'Name',
    'Description',
    'Author',
    'Created',
    'Commands',
    'Full_Path',
    'Detection',
    'Resources',
    'url',
  ]);
  const cert = data.find((e: any) => e.Name === 'Certutil.exe');
  expect(cert.url).toBe(
    'https://lolbas-project.github.io/lolbas/Binaries/Certutil/',
  );
  expect(cert.Commands).toEqual(
    source.find((e) => e.Name === 'Certutil.exe')!.Commands,
  );
  const csv = await (await request.get('/api/lolbas.csv')).text();
  expect(csv.split('\n')[0].trim()).toBe(
    'Filename,Description,Author,Date,Command,Command Description,Command Usecase,Command Category,Command Privileges,MITRE ATT&CK technique,Operating System,Paths,Detections,Resources,Acknowledgements,URL,Tags',
  );
  const nav = await (
    await request.get('/mitre_attack_navigator_layer.json')
  ).json();
  expect(nav.domain).toBe('enterprise-attack');
  expect(nav.techniques.length).toBe(techniqueCount);
  expect((await request.get('/assets/lolbas-count.svg')).ok()).toBeTruthy();
});

test('LOL-SITE-001 no-JavaScript catalog and detail navigation', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4388/');
  await expect(page.locator('[data-row]')).toHaveCount(source.length);
  await page
    .locator('.entry-name')
    .filter({ hasText: 'AddinUtil.exe' })
    .click();
  await expect(
    page.getByRole('heading', { name: 'AddinUtil.exe', exact: true }),
  ).toBeVisible();
  await context.close();
});

test('LOL-SITE-001 mobile layout, keyboard access and clean runtime', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('response', (res) => {
    if (res.status() >= 400) errors.push(`${res.status()} ${res.url()}`);
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  await page.keyboard.press('/');
  await expect(page.getByRole('searchbox')).toBeFocused();
  await page.getByRole('searchbox').fill('AddinUtil');
  await page.locator('.entry-name:visible').click();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  expect(errors).toEqual([]);
});

test('LOL-SITE-001 about button stays readable before hover and maintainers are linked first', async ({
  page,
}) => {
  await page.goto('/about/');
  const button = page.getByRole('link', { name: 'Explore the repository' });
  await button.scrollIntoViewIfNeeded();
  const contrast = () =>
    button.evaluate((node) => {
      const style = getComputedStyle(node);
      const luminance = (color: string) => {
        const channels = color
          .match(/[\d.]+/g)!
          .slice(0, 3)
          .map(Number)
          .map((n) => {
            const channel = n / 255;
            return channel <= 0.04045
              ? channel / 12.92
              : ((channel + 0.055) / 1.055) ** 2.4;
          });
        return (
          channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
        );
      };
      const foreground = luminance(style.color),
        background = luminance(style.backgroundColor);
      return (
        (Math.max(foreground, background) + 0.05) /
        (Math.min(foreground, background) + 0.05)
      );
    });
  expect(await contrast()).toBeGreaterThanOrEqual(4.5);
  await button.hover();
  expect(await contrast()).toBeGreaterThanOrEqual(4.5);
  await expect(page.locator('.article h2').first()).toHaveText(
    'Project maintainers',
  );
  await expect(page.locator('.maintainer-list a')).toHaveCount(7);
  for (const handle of [
    'oddvarmoe',
    'bohops',
    'xenosCR',
    'ConsciousHacker',
    'liamsomerville',
    'Wietze',
    '_josehelps',
  ]) {
    await expect(
      page.getByRole('link', { name: new RegExp(`@${handle}`) }),
    ).toHaveAttribute('href', `https://x.com/${handle}`);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
});

test('LOL-SITE-001 visual evidence for catalog, detail and mobile', async ({
  page,
}, testInfo) => {
  const { mkdir, copyFile } = await import('node:fs/promises');
  const { resolve } = await import('node:path');
  async function capture(name: string) {
    const path = testInfo.outputPath(`${name}.png`);
    await page.screenshot({ path, fullPage: false });
    await testInfo.attach(name, { path, contentType: 'image/png' });
    if (!process.env.CI) {
      await mkdir(resolve('../.context'), { recursive: true });
      await copyFile(path, resolve(`../.context/${name}.png`));
    }
  }
  await page.setViewportSize({ width: 1440, height: 1100 });
  await page.goto('/');
  for (const width of [1440, 900]) {
    await page.setViewportSize({ width, height: 1100 });
    const terminal = await page.locator('.terminal').boundingBox();
    const label = await page.locator('.label-bottom').boundingBox();
    expect(terminal).not.toBeNull();
    expect(label).not.toBeNull();
    expect(terminal!.y + terminal!.height + 8).toBeLessThanOrEqual(label!.y);
  }
  await page.setViewportSize({ width: 1440, height: 1100 });
  await capture('lolbas-home');
  await page.locator('#catalog').scrollIntoViewIfNeeded();
  await capture('lolbas-catalog');
  await page.goto('/lolbas/Binaries/Addinutil/');
  await expect(
    page.getByRole('heading', { name: 'AddinUtil.exe', exact: true }),
  ).toBeVisible();
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  await capture('lolbas-detail');
  await page.goto('/about/');
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  await capture('lolbas-about');
  await page
    .getByRole('link', { name: 'Explore the repository' })
    .scrollIntoViewIfNeeded();
  await capture('lolbas-about-button');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await capture('lolbas-mobile');
  await page.goto('/about/');
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  await capture('lolbas-about-mobile');
});

test('LOL-SITE-002 styled filter menu supports pointer, keyboard and dismissal', async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/?type=Binaries#catalog');
  const category = page.locator('#category');
  await category.click();
  const download = page.getByRole('option', { name: 'Download', exact: true });
  await expect(download).toBeVisible();
  const path = testInfo.outputPath('lolbas-dropdown.png');
  await page.screenshot({ path });
  await testInfo.attach('Styled filter menu', {
    path,
    contentType: 'image/png',
  });
  if (!process.env.CI) {
    const { copyFile, mkdir } = await import('node:fs/promises');
    const { resolve } = await import('node:path');
    await mkdir(resolve('../.context'), { recursive: true });
    await copyFile(path, resolve('../.context/lolbas-dropdown.png'));
  }
  await download.click();
  await expect(category).toHaveValue('Download');
  const rows = page.locator('[data-row]:visible');
  expect(await rows.count()).toBeGreaterThan(0);
  for (const row of await rows.all())
    await expect(row).toHaveAttribute('data-categories', /Download/);
  await page.locator('#sort').focus();
  await page.keyboard.press('Space');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await expect(page.locator('#sort')).toHaveValue('newest');
  await category.click();
  await expect(download).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(category).toHaveValue('Download');
  await expect(category).toBeFocused();
});

test('LOL-SITE-002 column sorting toggles direction, persists and follows filter/reset state', async ({
  page,
}) => {
  await page.goto('/?category=Execute');
  const rows = page.locator('[data-row]:visible');
  const cases = [
    { key: 'name', attr: 'data-name', numeric: false },
    { key: 'functions', attr: 'data-functions', numeric: false },
    { key: 'type', attr: 'data-type-label', numeric: false },
    { key: 'attack', attr: 'data-attack', numeric: false },
    { key: 'detections', attr: 'data-detections', numeric: true },
  ];
  for (const { key, attr, numeric } of cases) {
    const button = page.locator(`[data-sort="${key}"]`);
    let previousDirection: string | null = null;
    for (let click = 0; click < 2; click++) {
      await page.getByRole('button', { name: 'Next →' }).click();
      await expect(page.locator('#page-info')).toContainText('Page 2');
      await button.click();
      await expect(page.locator('#page-info')).toContainText('Page 1');
      const direction = await button.locator('..').getAttribute('aria-sort');
      expect(['ascending', 'descending']).toContain(direction);
      if (previousDirection) expect(direction).not.toBe(previousDirection);
      previousDirection = direction;
      const values = await rows.evaluateAll(
        (elements, attribute) =>
          elements.map((el) => el.getAttribute(attribute)!),
        attr,
      );
      const expected = [...values].sort((a, b) =>
        numeric
          ? Number(a) - Number(b)
          : a.localeCompare(b, 'en', { numeric: key === 'attack' }),
      );
      if (direction === 'descending') expected.reverse();
      expect(values).toEqual(expected);
      const sort = await page.locator('#sort').inputValue();
      await page.reload();
      await expect(page.locator('#sort')).toHaveValue(sort);
      await expect(button.locator('..')).toHaveAttribute(
        'aria-sort',
        direction!,
      );
      await expect(page.locator('#category')).toHaveValue('Execute');
    }
  }
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(
    page.locator('[data-sort="name"]').locator('..'),
  ).toHaveAttribute('aria-sort', 'ascending');
  await page.locator('[data-sort="name"]').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#sort')).toHaveValue('reverse');
});
