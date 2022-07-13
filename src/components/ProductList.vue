<!--
 * @Author: Molly Pan
 * @Date: 2022-07-13 16:41:22
 * @LastEditTime: 2022-07-13 18:35:01
 * @FilePath: /pinia-examples/src/components/ProductList.vue
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
-->
<template>
    <ul>
        <li v-for="item in productsStore.all" :key="item.id">
            {{ item.title }} - {{ item.price }}
            <br />
            <button 
            :disabled="!item.inventory"
            @click="cartStore.addProductToCart(item)">
            添加到购物车
            </button>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { useProductsStore } from '../store/products'
    import { useCartStore } from '../store/cart'
    
    const productsStore = useProductsStore()
    const cartStore = useCartStore()

    productsStore.loadAllProducts()
</script>