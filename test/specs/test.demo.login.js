import homePage from "../pageobjects/home.page"
import loginPage from "../pageobjects/login.page"

describe('Login Feature', () => {
    it('Test Case 1 - Login Successful', async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')

        //assertion
        await homePage.validateOnHomePage()
    })

    it('Test Case 2 - Login with wrong password', async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce1')

        // assertion
        // await loginPage.validateWrongPassword()
        await expect(loginPage.wrongPasswordTxtbox).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
})