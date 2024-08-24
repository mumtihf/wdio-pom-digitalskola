import Page from "./page";
import { $ } from '@wdio/globals';

class LoginPage extends Page {
    get usernameTxtbox () {
        return $('#user-name')
    }

    get passwordTxtbox () {
        return $('#password')
    }

    get loginBtn () {
        return $('//input[@type="submit"]')
    }

    get wrongPasswordTxtbox () {
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3')
    }

    async inputUsername(username) {
        await this.usernameTxtbox.setValue(username)
    }

    async inputPassword(password) {
        await this.passwordTxtbox.setValue(password)
    }

    async clickLoginBtn () {
        await this.loginBtn.click()
    }

    async login(username, password) {
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLoginBtn()
    }

    async validateWrongPassword() {
        await expect(this.wrongPasswordTxtbox).toBeDisplayed()
    }

    open() {
        return super.open('')
    }
}

export default new LoginPage()