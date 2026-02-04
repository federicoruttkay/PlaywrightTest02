import { test, expect } from '@playwright/test';

test('test youtube', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await expect(page.locator('#channel-title')).toContainText('Playwright');
  await expect(page.locator('#center')).toMatchAriaSnapshot(`
    - search:
      - combobox "Search" [expanded]: playwright
      - button "Clear search query"
      - button "Search"
    - button "Search with your voice"
    - tooltip "tooltip"
    `);
});