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

const app = createApp(App)

ELICON(app)
app.use(store)
app.use(ElementPlus)
app.use(router)

microApp.start({
  plugins: {
    modules: {
      'appname-vite': [
        {
          loader (code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, all => {
                return all.replace('/child/vite/', 'http://localhost:4007/child/vite/')
              })
            }

            return code
          }
        }
      ],
      // 解决create-react-app中sockjs-node报错的问题
      'appname-react16': [{
        loader (code) {
          if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
            code = code.replace('window.location.port', '4004')
          }
          return code
        }
      }],
      // 解决create-react-app中sockjs-node报错的问题
      'appname-react17': [{
        loader (code) {
          if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
            code = code.replace('window.location.port', '4005')
          }
          return code
        }
      }]
    }
  }
})

app.mount('#app')
