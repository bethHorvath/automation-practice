import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:3000');
});

test.describe('testing react app', () => {
  test('should render Lets Start Automating text', async ({ page }) => {
    await expect(page.locator('text=Lets Start Automating')).toBeTruthy();
  });

  test('the Lets start automating text should be red', async ({ page }) => {
    const locator = page.locator('text=Lets Start Automating');
    await expect(locator).toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  test('should render Sky website text', async ({ page }) => {
    await expect(page.locator('text=Sky website')).toBeVisible();
  });
});
