import { test as setup} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

setup('Global Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();

    //use decrypted .env
    await login.login(process.env.TEST_EMAIL!, process.env.TEST_PASS!);

    //save state to bypass login
    await page.context().storageState({ path: '.auth/user.json' });
})