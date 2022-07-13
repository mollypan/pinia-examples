/*
 * @Author: Molly Pan
 * @Date: 2022-07-13 17:10:58
 * @LastEditTime: 2022-07-13 18:22:32
 * @FilePath: /pinia-examples/src/store/products.ts
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */
import { defineStore } from "pinia";
import { getProducts, IProduct } from '../api/shop'


export const useProductsStore = defineStore('products', {
    state: () => {
        return {
            all: [] as IProduct[]
        }
    },

    getters: {},

    actions: {
        async loadAllProducts() {
            const res = await getProducts()
            this.all = res
        },

        decreaseInventory(product: IProduct) {
            const res = this.all.find(item => item.id === product.id)
            if (res) {
                res.inventory--
            }
        }
    }
})