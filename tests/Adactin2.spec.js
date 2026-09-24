import { test, expect } from '@playwright/test';

test.describe('Adactin Hotel Search Tests', () => {

    test.beforeEach(async ({ page }) => {

        // Open Adactin
        await page.goto('https://adactinhotelapp.com/index.php');

        // Login
        await page.locator('#username').fill('ifeoluwa200');
        await page.locator('#password').fill('Olukanni008@');

        await page.getByRole('button', { name: 'Login' }).click();

        // Verify login
        await expect(page).toHaveURL(/SearchHotel/);
    });


    test('Verify user can search for hotels', async ({ page }) => {

        // Location
        await page.locator('#location').selectOption('Sydney');

        // Hotel
        await page.locator('#hotels').selectOption('Hotel Creek');

        // Room Type
        await page.locator('#room_type').selectOption('Standard');

        // Number of Rooms
        await page.locator('#room_nos').selectOption('1');

        // Check-in Date
        await page.locator('#datepick_in').fill('20/09/2026');

        // Check-out Date
        await page.locator('#datepick_out').fill('22/09/2026');

        // Adults per Room
        await page.locator('#adult_room').selectOption('2');

        // Children per Room
        await page.locator('#child_room').selectOption('0');

        // Click Search
        await page.getByRole('button', { name: 'Search' }).click();

        // Verify next page
        await expect(page).toHaveURL(/SelectHotel/);

    });

});