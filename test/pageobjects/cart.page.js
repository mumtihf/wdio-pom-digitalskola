import Page from "./page"
import { $, expect } from '@wdio/globals';

class CartPage extends Page {
    get checkoutBtn () {
        return $('#checkout')
    }

    get continueShoppingBtn () {
        return $('#continue-shopping')
    }

    get itemName () {
        return $('#item_4_title_link')
    }

    get itemPrice() {
        return $('//*[@class="inventory_item_price"]')
    }

    async validateSuccessAddItemToCart() {
        await expect(this.checkoutBtn).toBeExisting()
        await expect(this.continueShoppingBtn).toBeExisting()
        await expect(this.itemName).toBeExisting()
        await expect(this.itemPrice).toBeExisting()
    }
    
    open() {
        return super.open('cart.html')
    }
}

export default new CartPage()