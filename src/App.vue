<!--
 * @Author: Molly Pan
 * @Date: 2022-07-13 13:43:34
 * @LastEditTime: 2022-07-13 16:51:58
 * @FilePath: /pinia-examples/src/App.vue
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
-->
<template>
  <h1>pinia - 购物车示例</h1>
  <hr>
  <h2>商品列表</h2>
  <ProductList />
  <hr>
  <ShoppingCart />
</template>

<script setup lang="ts">
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
</script>

<style>

</style>
