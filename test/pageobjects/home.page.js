import Page from "./page";
import { $, expect } from '@wdio/globals';

class HomePage extends Page {
    get addToCartBtn () {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get productImage () {
        return $('#item_4_img_link')
    }

    get cartIconBtn () {
        return $('#shopping_cart_container')
    }

    async addItemToCart() {
        await this.addToCartBtn.click()
        await this.cartIconBtn.click()
    }

    async validateOnHomePage () {
        await expect(this.productImage).toBeExisting()
        await expect(this.addToCartBtn).toBeExisting()
        await expect(this.cartIconBtn).toBeExisting()
    }

    open() {
        return super.open('inventory.html')
    }
}

export default new HomePage()