import { test, expect } from '@playwright/test';
import { toBeVisible } from '@testing-library/jest-dom/dist/matchers';

test.beforeEach(async ({ page }) => {
  await page.goto('np');
});

test.describe('testing react app', () => {
  test('should render Lets Start Automating text', async ({ page }) => {
    await expect(page.locator('text=Lets Start Automating')).toBeVisible();
  });

  test('the Lets start automating text should be red', async ({ page }) => {
    const locator = page.locator('text=Lets Start Automating');
    await expect(locator).toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  test('should render Sky website text', async ({ page }) => {
    await expect(page.locator('text=Sky website')).toBeVisible();
  });

  test('Team Calendar is displayed as link on app page', async ({ page }) => {
    const calendarText = await page.locator('text=Team Calendar');
    await expect(calendarText).toHaveAttribute(
      'href',
      'https://wiki.at.sky/display/LT/Digital+Service+Test+-+Team+Calendar'
    );
  });

  test('text should display when a key is pressed', async ({ page }) => {
    await page.focus('data-test-id=key-press-input');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=you pressed: Enter')).toBeVisible();
  });
});
