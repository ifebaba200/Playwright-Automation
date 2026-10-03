import { test, expect } from '@playwright/test';

test.describe('SecureBank - Login Page Automation Testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/login');
  });

  test('Valid user can login', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('bank_sauce');
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();
    await expect(page).toHaveURL('https://qaplayground.com/bank/dashboard');
  });
});

test.describe('SecureBank - Transfer automation', () => {
  test('Transfer money between accounts', async ({ page }) => {
    await page.goto('https://qaplayground.com/bank/dashboard');
    await page.getByRole('textbox', { name: 'username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'password' }).fill('bank_sauce');
    await page.getByRole('button', { name: 'Sign in to SecureBank' }).click();
    await page.locator(':text-is("Transfer")').click();
    await page.locator("//button[@id='transfer-from-trigger']").click();
    await page.getByRole('option', { name: /Everyday Checking/ }).click();
    await page.locator("//button[@id='transfer-to-trigger']").click();
    await page.getByRole('option', { name: /High-Yield Savings/ }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).fill('150');
    await page.getByRole('textbox', { name: 'e.g. Rent, vacation fund…' }).fill('Rent');
    await page.getByRole('button', { name: 'Review Transfer' }).click();
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();
    await expect(page).toHaveURL('https://qaplayground.com/bank/transfer/confirmation');
  });
});
    