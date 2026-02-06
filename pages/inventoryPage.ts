import { Page, Locator, expect } from "@playwright/test";

export class InventoryPage {

    public readonly page: Page
    public readonly appLogo: Locator;
    public readonly shoppingCartBadge: Locator;
    /**
     *
     */
    constructor(page: Page) {
        this.page = page;
        this.appLogo = page.locator('.app_logo')
        this.shoppingCartBadge = page.locator('.shopping_cart_badge')

    }

    async expectInventoryPageVisible() {
        await expect(this.appLogo).toBeVisible()
        await expect(this.appLogo).toHaveText('Swag Labs');
        await expect(this.page).toHaveURL(new RegExp('/inventory.html'))
    }

    async addProductToCart(product: string) {
        const addButton = this.page.locator(`button[data-test="add-to-cart-${product}"]`)
        await addButton.click()
    }

    async expectCartCount(expectedCount: string) {
        await expect(this.shoppingCartBadge).toHaveText(expectedCount);
    }

    async naviagateToCart() {
        await this.shoppingCartBadge.click()
    }

}