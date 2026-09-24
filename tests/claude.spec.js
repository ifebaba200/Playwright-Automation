import { test, expect } from '@playwright/test';

test.describe('Claude AI - Login Page Automation Testing', () => {

    // Run before every test
    test.beforeEach(async ({ page }) => {

        await page.goto('https://claude.ai/login');

        await page.waitForLoadState('domcontentloaded');

    });


    // ============================================================
    // TC01 - Verify Claude login page loads successfully
    // ============================================================

    test('TC01 - Verify Claude login page loads successfully', async ({ page }) => {

        await expect(page).toHaveURL(/claude\.ai/);

        let emailInput = page.locator('input[type="email"]');

        await expect(emailInput).toBeVisible();

    });


    // ============================================================
    // TC02 - Verify email field is visible
    // ============================================================

    test('TC02 - Verify email input field is displayed', async ({ page }) => {

        let emailInput = page.locator('input[type="email"]');

        await expect(emailInput).toBeVisible();

        await expect(emailInput).toBeEnabled();

    });


    // ============================================================
    // TC03 - Verify email placeholder
    // ============================================================

    test('TC03 - Verify email field placeholder', async ({ page }) => {

        let emailInput = page.locator('input[type="email"]');

        await expect(emailInput)
            .toHaveAttribute('placeholder', 'Enter your email');

    });


    // ============================================================
    // TC04 - Enter valid email
    // ============================================================

    test('TC04 - Verify user can enter a valid email address', async ({ page }) => {

        let emailInput = page.locator('input[type="email"]');

        await emailInput.fill('qatester@example.com');

        await expect(emailInput)
            .toHaveValue('qatester@example.com');

    });


    // ============================================================
    // TC05 - Clear email
    // ============================================================

    test('TC05 - Verify email field can be cleared', async ({ page }) => {

        let emailInput = page.locator('input[type="email"]');

        await emailInput.fill('qatester@example.com');

        await expect(emailInput)
            .toHaveValue('qatester@example.com');

        await emailInput.clear();

        await expect(emailInput)
            .toHaveValue('');

    });


    // ============================================================
    // TC06 - Change email
    // ============================================================

    test('TC06 - Verify email address can be changed', async ({ page }) => {

        let emailInput = page.locator('input[type="email"]');

        await emailInput.fill('first@example.com');

        await expect(emailInput)
            .toHaveValue('first@example.com');

        await emailInput.clear();

        await emailInput.fill('second@example.com');

        await expect(emailInput)
            .toHaveValue('second@example.com');

    });


    // ============================================================
    // TC07 - Invalid email format
    // ============================================================

    test('TC07 - Verify invalid email format fails browser validation', async ({ page }) => {

        let emailInput = page.locator('input[type="email"]');

        await emailInput.fill('invalidemail');

        await expect(emailInput)
            .toHaveValue('invalidemail');

        let isValid = await emailInput.evaluate((element) => {
            return element.checkValidity();
        });

        expect(isValid).toBe(false);

    });


    // ============================================================
    // TC08 - Valid email format
    // ============================================================

    test('TC08 - Verify valid email format passes browser validation', async ({ page }) => {

        let emailInput = page.locator('input[type="email"]');

        await emailInput.fill('automation@example.com');

        await expect(emailInput)
            .toHaveValue('automation@example.com');

        let isValid = await emailInput.evaluate((element) => {
            return element.checkValidity();
        });

        expect(isValid).toBe(true);

    });


    // ============================================================
    // TC09 - Verify field after page refresh
    // ============================================================

    test('TC09 - Verify email field is available after page refresh', async ({ page }) => {

        await page.reload();

        await page.waitForLoadState('domcontentloaded');

        let emailInput = page.locator('input[type="email"]');

        await expect(emailInput).toBeVisible();

        await expect(emailInput).toBeEnabled();

    });


    // ============================================================
    // TC10 - Multiple email updates
    // ============================================================

    test('TC10 - Verify email field accepts multiple updates', async ({ page }) => {

        let emailInput = page.locator('input[type="email"]');

        // First email
        await emailInput.fill('first@example.com');

        await expect(emailInput)
            .toHaveValue('first@example.com');


        // Clear field
        await emailInput.clear();

        await expect(emailInput)
            .toHaveValue('');


        // Second email
        await emailInput.fill('second@example.com');

        await expect(emailInput)
            .toHaveValue('second@example.com');


        // Clear field again
        await emailInput.clear();

        await expect(emailInput)
            .toHaveValue('');


        // Third email
        await emailInput.fill('third@example.com');

        await expect(emailInput)
            .toHaveValue('third@example.com');

    });

});