import cartPage from "../pageobjects/cart.page"
import homePage from "../pageobjects/home.page"
import loginPage from "../pageobjects/login.page"

describe('Add To Cart Feature', () => {
    it('Test Case 1 - Add item to cart', async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await homePage.addItemToCart()

        //assertion
        await cartPage.validateSuccessAddItemToCart()
    })
})