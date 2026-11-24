import { test, expect } from '@playwright/test';

test('LOL-CI-001 hosted fork preview keeps navigation, assets and data under its base path', async ({
  page,
  request,
  context,
}) => {
  const base = process.env.SITE_BASE!;
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('response', (response) => {
    if (response.status() >= 400) errors.push(response.url());
  });
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto(`${base}/`);
  await expect(
    page.getByRole('heading', {
      name: 'Living Off The Land Binaries, Scripts and Libraries',
    }),
  ).toBeVisible();
  expect(
    await page
      .locator('.brand-logo')
      .evaluate((img) => (img as HTMLImageElement).naturalWidth),
  ).toBeGreaterThan(0);
  for (const path of await page
    .locator('a[href^="/"], img[src^="/"], link[href^="/"]')
    .evaluateAll((nodes) =>
      nodes.map(
        (node) => node.getAttribute('href') || node.getAttribute('src')!,
      ),
    ))
    expect(path.startsWith(`${base}/`)).toBeTruthy();
  await page.getByRole('searchbox').fill('certutil');
  await expect(page.locator('[data-row]:visible')).toHaveCount(1);
  await page.locator('.entry-name:visible').click();
  await expect(page).toHaveURL(new RegExp(`${base}/lolbas/Binaries/Certutil/`));
  const copy = page.locator('[data-copy]').first();
  const command = await copy.getAttribute('data-copy');
  await copy.click();
  await expect(copy).toHaveText('Copied ✓');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    command,
  );
  await page.getByRole('link', { name: 'Insights', exact: true }).click();
  await page.locator('.growth-chart a').last().click();
  await expect(page).toHaveURL(new RegExp(`${base}/\\?year=`));
  await expect(page.locator('#year-filter')).toContainText('Created in');
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.locator('.endpoint').first().click();
  await expect(page).toHaveURL(new RegExp(`${base}/api/lolbas.json`));
  const response = await request.get(`${base}/api/lolbas.json`);
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.find((entry: any) => entry.Name === 'Certutil.exe').url).toBe(
    'https://lolbas-project.github.io/lolbas/Binaries/Certutil/',
  );
  expect(errors).toEqual([]);
});
