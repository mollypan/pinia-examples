<template>
  <p>{{ count }}</p>
  <p>{{ foo }}</p>
  <p>{{ arr }}</p>
  <hr>
  <p>{{  mainStore.count10 }}</p>
  <p>{{  mainStore.count10 }}</p>
  <p>{{  mainStore.count10 }}</p>
  <button @click="handleChangeState">修改数据</button>
</template>

<script lang="ts" setup>
import { useMainStore } from '../store'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
// 下面的这种解构方式是不行的，会丢失响应式
// const { count } = mainStore

const { count, foo, arr } = storeToRefs(mainStore)

const handleChangeState = () => {
  // 方式1: 最简单的方式就是这样
  // count.value++

  //方式2: 如果需要修改多个数据，可以使用 $patch 批量更新,有性能优化的效果
 /*  mainStore.$patch({
    count: count.value+1,
    foo: 'molly'
  }) */

  //方式3: $patch 一个函数, 此处的 state 就是 store 里的 state
  // mainStore.$patch(state => {
  //   count.value++
  //   foo.value = 'molly'
  //   arr.value.push(4)
  // })

  mainStore.changeState()
}
</script>