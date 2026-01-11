import { Page, Locator } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();


export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator


constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: /E-Mail Address/i });
    this.passwordInput = page.getByRole('textbox', { name: /Password/i });
    this.loginBtn = page.locator('input.btn.btn-primary:visible')
}

async navigate() {
    const targetUrl = process.env.BASE_URL!;
    await this.page.goto(targetUrl);
}

async login(email: string, pass: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.loginBtn.click();

}
}   