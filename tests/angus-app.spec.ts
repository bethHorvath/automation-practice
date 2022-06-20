import { test, expect } from '@playwright/test';
import { toBeVisible } from '@testing-library/jest-dom/dist/matchers';

test.beforeEach(async ({ page }) => {
  await page.goto('np');
});

test.describe('testing react app', () => {
  test('Team Calendar option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Team Calendar"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Team Calendar');
    await expect(calendarImage).toHaveAttribute(
      'href',
      'https://wiki.at.sky/display/LT/Digital+Service+Test+-+Team+Calendar'
    );
  });
  test('Team Process option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Team Process"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Team Process');
    await expect(calendarImage).toHaveAttribute(
      'href',
      'https://wiki.at.sky/display/LT/Digital+Service+-+Team+Process'
    );
  });
  test('Test Data Hub option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Test Data Hub"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Test Data Hub');
    await expect(calendarImage).toHaveAttribute('href', 'https://wiki.at.sky/display/LT/01+Test+Data');
  });
  test('Team Strategy option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Team Strategy"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Team Strategy');
    await expect(calendarImage).toHaveAttribute(
      'href',
      'https://wiki.at.sky/display/LT/Digital+Service+-+Test+-+Team+Strategy'
    );
  });
  test('Team Handover Guides option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Team Handover Guides"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Team Handover Guides');
    await expect(calendarImage).toHaveAttribute(
      'href',
      'https://wiki.at.sky/display/LT/Digital+Services+Test+-+Squad+guides'
    );
  });
  test('Team Structure option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Team Structure"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Team Structure');
    await expect(calendarImage).toHaveAttribute(
      'href',
      'https://wiki.at.sky/display/LT/Service+Test+Chapter+Structure'
    );
  });
  test('Archive option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Archive"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Archive');
    await expect(calendarImage).toHaveAttribute(
      'href',
      'https://wiki.at.sky/display/LT/Digital+Service+Test+-+Archive'
    );
  });
  test('SQL Queries option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="SQL Queries"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=SQL Queries');
    await expect(calendarImage).toHaveAttribute('href', 'https://wiki.at.sky/display/LT/The+SQL+Page');
  });
  test('Automation option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Automation"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Automation');
    await expect(calendarImage).toHaveAttribute('href', 'https://wiki.at.sky/display/LT/02+Automation');
  });
  test('Tools option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Tools"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Tools');
    await expect(calendarImage).toHaveAttribute('href', 'https://wiki.at.sky/display/LT/03+Tools');
  });
  test('NDA option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="NDA"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=NDA');
    await expect(calendarImage).toHaveAttribute('href', 'https://wiki.at.sky/display/LT/Digital+Service+Test+-+NDA');
  });
  test('Demo Schedule option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Demo Schedule"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Demo Schedule');
    await expect(calendarImage).toHaveAttribute('href', 'https://wiki.at.sky/display/LT/Service+Friday+Demo+Schedule');
  });
  test('My Sky App option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="My Sky App"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=My Sky App');
    await expect(calendarImage).toHaveAttribute('href', 'https://wiki.at.sky/display/LT/My+Sky+App+Testing');
  });
  test('Accessibility option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Accessibility"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Accessibility');
    await expect(calendarImage).toHaveAttribute(
      'href',
      'https://wiki.at.sky/display/LT/Digital+Service+-+Accessibility+Test+Strategy'
    );
  });
  test('Test Library option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Test Library"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Test Library');
    await expect(calendarImage).toHaveAttribute('href', 'https://wiki.at.sky/display/LT/Test+Library');
  });
  test('Training Videos option is displayed and there is a link to it as an image', async ({ page }) => {
    await expect(page.locator('text="Training Videos"')).toBeVisible();
    const calendarImage = await page.locator('data-test-id=Training Videos');
    await expect(calendarImage).toHaveAttribute(
      'href',
      'https://wiki.at.sky/display/LT/Digital+Service+-+Test+-+Team+Strategy'
    );
  });
});
