import { test, expect } from '@playwright/test';

test('Verify user can login successfully', async ({ page }) => {

    await page.goto('https://example.com');

    await page.getByLabel('Username').fill('Admin');

    await page.getByLabel('Password').fill('Password123');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);

});