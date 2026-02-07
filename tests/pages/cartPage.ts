import { Page, Locator, expect } from "@playwright/test";

export class CartPage {

    public readonly page: Page
    public readonly cartTitle: Locator;
    public readonly checkoutButton: Locator;
    /**
     *
     */
    constructor(page: Page) {
        this.page = page;
        this.cartTitle = page.locator('[data-test="title"]')
        this.checkoutButton = page.locator('button[data-test="checkout"]')

    }

    async expectCartPageVisible() {
        await expect(this.cartTitle).toBeVisible()
        await expect(this.cartTitle).toHaveText('Your Cart');
        await expect(this.page).toHaveURL(new RegExp('/cart.html'))
    }

    async navigateToCheckout() {
        await this.checkoutButton.click()
    }

}