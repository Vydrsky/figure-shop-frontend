import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './vuex-store/index'

loadFonts()

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(store);

app.mount('#app')
