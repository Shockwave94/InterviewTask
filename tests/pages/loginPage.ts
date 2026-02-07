import { Page, Locator, expect } from "@playwright/test";

const pageUrl = 'http://www.saucedemo.com'

export class LoginPage {

    public readonly page: Page
    public readonly userameInput: Locator;
    public readonly passwordInput: Locator;
    public readonly loginButton: Locator;
    public readonly errorMessage: Locator;
    /**
     *
     */
    constructor(page: Page) {
        this.page = page;
        this.userameInput = page.locator('[data-test="username"]')
        this.passwordInput = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.errorMessage = page.locator('[data-test="error"]')
    }

    async goto() {
        await this.page.goto(pageUrl)
    }

    async loginPageVisilbe() {
        await expect(this.userameInput).toBeVisible()
        await expect(this.passwordInput).toBeVisible()
    }

    async login(username: string, password: string) {
        await this.userameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async errorMesageExpectVisible(expectedText: string) {
        await expect(this.errorMessage).toBeVisible()
        await expect(this.errorMessage).toContainText(expectedText)
    }
}
