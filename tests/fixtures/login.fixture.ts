import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';
import * as testData from '../helpers/testData';
import { test as base } from '@playwright/test';

export const test = base.extend<{ inventoryPage: InventoryPage; }>({
    inventoryPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(
            testData.USERS.STANDARD,
            testData.PASSWORDS.DEFAULT
        );
        await inventoryPage.expectInventoryPageVisible();

        await use(inventoryPage);
    },
});