import { test, expect } from '@playwright/test';

test.describe('Login Functionality Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://adactinhotelapp.com/index.php');
    });

    test('Verify user can login ', async ({ page }) => {

        // Login
        await page.locator('#username').fill('Ifeoluwa200');
        await page.locator('#password').fill('Olukanni008@');
        await page.getByRole('button', { name: 'Login' }).click();

        // Search for hotels
        await page.locator('#location').selectOption('Sydney');
        await page.locator('#hotels').selectOption('Hotel Creek');
        await page.locator('#room_type').selectOption('Standard');
        await page.locator('#room_nos').selectOption('1');

        await page.locator('#datepick_in').fill('10/10/2023');
        await page.locator('#datepick_out').fill('12/10/2023');

        await page.locator('#adult_room').selectOption('2');
        await page.locator('#child_room').selectOption('0');

        await page.getByRole('button', { name: 'Search' }).click();

    });

});