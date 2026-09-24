import { test, expect } from '@playwright/test';

test.describe('Login Functionality Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    // Test 1: Successful login
    test('Verify user can login successfully', async ({ page }) => {

        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');

        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    });


    // Test 2: Invalid credentials
    test('Verify user cannot login with invalid credentials', async ({ page }) => {

        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');

        await page.getByRole('textbox', { name: 'Password' }).fill('ifeoluwa200');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByText('Epic sadface: Username and password do not match any user in this service')
        ).toBeVisible();

    });


    // Test 3: Empty username
    test('Verify user cannot login with empty username field', async ({ page }) => {

        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByText('Epic sadface: Username is required')
        ).toBeVisible();

    });


    // Test 4: Empty password
    test('Verify user cannot login with empty password field', async ({ page }) => {

        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByText('Epic sadface: Password is required')
        ).toBeVisible();

    });

}); 