import {test, expect } from '@playwright/test';
test.describe('SecureBank - Login Page Automation Testing', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qaplayground.com/bank/login');
    });
    test('Valid user can login', async ({ page }) => {
        await page.getByRole('textbox',{name: 'Username'}).fill('standard_user');
        await page.getByRole('textbox',{name: 'Password'}).fill('bank_sauce');
        await page.getByRole('button', { name: 'Sign in to SecureBank'}).click();
        await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
    });
});

test.describe('SecureBank - Transfer Money Automation Testing', () => {
    ('transfer money between accounts', async ({ page }) => {
    await page.getByTestId('transfer-page').click();
    await page.getByRole('combobox',{name: 'From Account'}).click();
    await page.getByRole('option', { name: /Everyday Checking/ }).click();
    await page.getByRole('combobox',{name: 'To Account'}).selectOption('High-Yield Savings');
    await page.getByRole('option', { name: /High-Yield Savings/ }).click();
    await page.getByRole('spinbutton',{name: 'Amount'}).fill('500');
    await page.getByRole('textbox', { name: 'e.g. Rent, vacation fund…' }).fill('Vacation fund');
    await page.getByLabel('Today').click();
    await page.getByRole('button', { name: 'Review Transfer' }).click();
    await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
    await expect(page.getByText('Transfer successful')).toBeVisible();
    });
    // Add steps for transferring money between accounts here
});