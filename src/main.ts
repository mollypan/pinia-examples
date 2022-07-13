/*
 * @Author: Molly Pan
 * @Date: 2022-07-13 13:43:34
 * @LastEditTime: 2022-07-13 13:59:04
 * @FilePath: /pinia-examples/src/main.ts
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// 创建 Pinia 实例
const pinia = createPinia()

const app = createApp(App)

// 挂载到 Vue 根实例
app.use(pinia)
createApp(App).mount('#app')
