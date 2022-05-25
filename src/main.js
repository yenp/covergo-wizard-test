import { createApp } from 'vue'
import store from './stores'
import App from './App.vue'
import router from './router'
import mixin from './mixins';
import './index.css'
const app = createApp(App);
app.mixin(mixin);
app.use(store)
app.use(router)

app.mount('#app')
