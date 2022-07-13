<!--
 * @Author: Molly Pan
 * @Date: 2022-07-13 16:44:44
 * @LastEditTime: 2022-07-13 20:12:05
 * @FilePath: /pinia-examples/src/components/ShoppingCart.vue
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
-->
<template>
    <div class="cart">
        <h2>我的购物车</h2>
        <p>
            <i>请添加商品到购物车</i>
        </p>
        <ul>
            <li v-for="item in cartStore.cartProducts" :key="item.id">{{item.title}} - {{item.price}} ✖️ {{item.quantity}}</li>
        </ul>
        <p>商品总价： {{ cartStore.totalPrice }}</p>
        <p>
            <button @click="cartStore.checkout" :disabled="cartStore.cartProducts.length === 0">结算</button>
        </p>
        <p v-show="cartStore.checkoutStatus">结算{{cartStore.checkoutStatus}}</p>
    </div>
</template>

<script setup lang="ts">
    import { useCartStore } from '../store/cart'

    const cartStore = useCartStore()
</script>