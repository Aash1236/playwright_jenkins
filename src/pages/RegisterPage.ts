import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly telephone: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly privacyPolicy: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.getByRole('textbox', { name: /First Name/i });
        this.lastName = page.getByRole('textbox', { name: /Last Name/i });
        this.email = page.getByRole('textbox', { name: /E-Mail/i });
        this.telephone = page.getByRole('textbox', { name: /Telephone/i });
        this.password = page.getByRole('textbox', { name: /Telephone/i });
        this.confirmPassword = page.getByRole('textbox', { name: /Password Confirm/i });
        this.privacyPolicy = page.locator('[name="agree"]');
        this.continueBtn = page.locator('input.btn.btn-primary:visible')
    }

    async registerUser(details: any) {
        await this.firstName.fill(details.fn);
        await this.lastName.fill(details.ln);
        await this.email.fill(details.email);
        await this.telephone.fill(details.tel);
        await this.password.fill(details.pass);
        await this.confirmPassword.fill(details.pass);
        await this.privacyPolicy.check();
        await this.continueBtn.click();
    }
}