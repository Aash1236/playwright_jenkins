import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';

test.describe('User Registration', () => {

    test.use({ storageState: { cookies: [], origins: [] }});

    test('should register a new user', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        const timestamp = Date.now();
        const userData = {
            fn: 'Ashutosh',
            ln: 'Fase',
            email: `ashutosh_test${timestamp}@gmail.com`,
            tel: '1597534562',
            pass: 'Test@1234'
        };

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await registerPage.registerUser(userData);

        //await expect(page).toHaveURL(/success/);
        //await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible();

    })
})

