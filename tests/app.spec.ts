import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:3000');
});

test.describe('testing react app', () => {
  test('should render Learn React text', async ({page}) => {
      expect(page.locator('text=Learn React')).toBeDefined();
  });

    test('should render Lets Start Automating text', async ({page}) => {
      expect(page.locator('text=Lets Start Automating')).toBeDefined()
    });
});
