/*
 * @Author: Molly Pan
 * @Date: 2022-07-13 17:44:54
 * @LastEditTime: 2022-07-13 20:16:15
 * @FilePath: /pinia-examples/src/store/cart.ts
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */
import { defineStore } from 'pinia'
import { buyProducts, IProduct } from '../api/shop'
import { useProductsStore } from './products'

type CartProduct = {
    quantity: number
} & Omit<IProduct, 'inventory'>

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cartProducts: [] as CartProduct[],
            checkoutStatus: null as null | string
        }
    },

    getters: {
        totalPrice(state) {
            return state.cartProducts.reduce((total, item) => {
                return total + item.price * item.quantity
            }, 0)
        }
    },

    actions: {
        addProductToCart(product: IProduct) {
            // 检查有无库存
            if (product.inventory < 1) {
                return
            }
            // 检查购物车中是否已有该商品
            const repeateItem = this.cartProducts.find(item => item.id === product.id)
            if (repeateItem) {
                //如果有商品数量+1
                repeateItem.quantity++
            } else {
                // 没有则添加商品
                this.cartProducts.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1
                })
            }
            // 更新商品库存
            const productsStore = useProductsStore()
            productsStore.decreaseInventory(product)
        },

        async checkout() {
            const res = await buyProducts()
            this.checkoutStatus = res ? '成功' : '失败'
            if (res) {
                this.cartProducts = []
            }
        }
    }

})