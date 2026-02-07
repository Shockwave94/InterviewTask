import { Page, Locator } from "@playwright/test";

export class CheckoutOnePage {

    public readonly page: Page
    public readonly firstNameInput: Locator;
    public readonly lastNameInput: Locator;
    public readonly zipCodeInput: Locator;
    public readonly continueButton: Locator;
    /**
     *
     */
    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]')
        this.lastNameInput = page.locator('[data-test="lastName"]')
        this.zipCodeInput = page.locator('[data-test="postalCode"]')
        this.continueButton = page.locator('[data-test="continue"]')

    }

    async fillCheckoutForm(firstName: string, lastName: string, zipCode: string) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.zipCodeInput.fill(zipCode)
        await this.continueButton.click()
    }

}