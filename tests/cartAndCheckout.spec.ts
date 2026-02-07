import { LoginPage } from './pages/loginPage'
import { InventoryPage } from './pages/inventoryPage'
import { CartPage } from './pages/cartPage'
import { CheckoutOnePage } from './pages/checkoutOnePage'
import * as testData from './helpers/testData';
import { test } from './fixtures/login.fixture';


test.describe('Inventory funcionality tests', () => {
  let cartPage: CartPage;
  let checkoutOnePage: CheckoutOnePage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page)
    checkoutOnePage = new CheckoutOnePage(page)
  })

  test('Should add product to cart', async ({ inventoryPage }) => {
    await inventoryPage.addProductToCart('sauce-labs-backpack')
    await inventoryPage.addProductToCart('sauce-labs-bolt-t-shirt')

    await inventoryPage.expectCartCount('2')
  });

  test('Should do the checkout succesfully', async ({ inventoryPage }) => {
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