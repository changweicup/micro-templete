import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './stores'
import microApp from '@micro-zoe/micro-app'
import 'element-plus/dist/index.css'
import './styles/reset.css'
import './styles/element/index.scss'
import ElementPlus from 'element-plus'
import ELICON from './plugins/ElIcon'
import ComComponents from './components'

const app = createApp(App)

ELICON(app)
ComComponents(app)

app.use(store)
app.use(ElementPlus)
app.use(router)

microApp.start()

app.mount('#app')
