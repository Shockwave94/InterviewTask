import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'
import { InventoryPage } from '../pages/inventoryPage'
import * as testData from './helpers/testData';

test.describe('Login funcionality tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
    await loginPage.goto();
    await loginPage.loginPageVisilbe();

  })

  test('Should login succesfully using standard user', async () => {

    await loginPage.login(testData.USERS.STANDARD, testData.PASSWORDS.DEFAULT);
    await inventoryPage.expectInventoryPageVisible();
  });

  test('Should fail to login using locked user', async () => {

    await loginPage.login(testData.USERS.LOCKED_OUT, testData.PASSWORDS.DEFAULT);
    await loginPage.errorMesageExpectVisible('Sorry, this user has been locked out.')
  });
})