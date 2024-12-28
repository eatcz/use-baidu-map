import { createApp } from 'vue'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map-3x'


const app = createApp(App)
app.use(BaiduMap, {
    ak:'your baidu ak'
})

app.mount('#app')