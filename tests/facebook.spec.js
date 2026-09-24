import{test,expect}from'@playwright/test';
test('Verify user can login successfully',async({page})=>
    {await page.goto('https://www.facebook.com/');
        await page.getByRole('textbox',{name:'Email or Phone'}).fill('Ife.2011@gmail.com');
        await page.getByRole('textbox',{name:'Password'}).fill('Olukanni008@');
        await page.getByRole('button',{name:'Log In'}).click();
        await expect(page).toHaveURL('https://www.facebook.com/');
    })

        