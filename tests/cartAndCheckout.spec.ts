import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/inventoryPage'
import { CartPage } from '../pages/cartPage'
import { CheckoutOnePage } from '../pages/checkoutOnePage'
import * as testData from './helpers/testData';

test.describe('Inventory funcionality tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutOnePage: CheckoutOnePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
    cartPage = new CartPage(page)
    checkoutOnePage = new CheckoutOnePage(page)
    await loginPage.goto();
    await loginPage.loginPageVisilbe();
    await loginPage.login(testData.USERS.STANDARD, testData.PASSWORDS.DEFAULT);
    await inventoryPage.expectInventoryPageVisible();

  })

  test('Should add product to cart', async () => {
    await inventoryPage.addProductToCart('sauce-labs-backpack')
    await inventoryPage.addProductToCart('sauce-labs-bolt-t-shirt')

    await inventoryPage.expectCartCount('2')
  });

  test('Should do the checkout succesfully', async () => {
    await inventoryPage.addProductToCart('sauce-labs-backpack')
    await inventoryPage.addProductToCart('sauce-labs-bolt-t-shirt')
    await inventoryPage.expectCartCount('2')
    await inventoryPage.naviagateToCart()

    await cartPage.expectCartPageVisible()
    await cartPage.navigateToCheckout()

    await checkoutOnePage.fillCheckoutForm('Marcin', 'Gorka', '54-106')

    //.. And then the rest of the checkout steps
  });


})