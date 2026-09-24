import { test, expect } from '@playwright/test';

test('Verify user can search for a product', async ({ page }) => {
    
    await page.goto('https://www.amazon.com/');
    await page.getByPlaceholder('Search').fill('MacBook');
    await page.locator('#nav-search-submit-button').click();
    await expect(page).toHaveURL(/search/);
    await expect(page.getByText('MacBook')).toBeVisible();  
});