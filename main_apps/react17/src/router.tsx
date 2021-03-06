import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home/home'
import SideBar from './components/sidebar'
const Angular11 = lazy(() => import(/* webpackChunkName: "angular11" */ './pages/angular11/angular11'))
const Nextjs = lazy(() => import(/* webpackChunkName: "nextjs" */ './pages/nextjs/nextjs'))
const Nuxtjs = lazy(() => import(/* webpackChunkName: "nuxtjs" */ './pages/nuxtjs/nuxtjs'))
const React16 = lazy(() => import(/* webpackChunkName: "react16" */ './pages/react16/react16'))
const React17 = lazy(() => import(/* webpackChunkName: "react17" */ './pages/react17/react17'))
const Vite = lazy(() => import(/* webpackChunkName: "vite" */ './pages/vite/vite'))
const Vue2 = lazy(() => import(/* webpackChunkName: "vue2" */ './pages/vue2/vue2'))
const Vue3 = lazy(() => import(/* webpackChunkName: "vue3" */ './pages/vue3/vue3'))

function App () {
  return (
    // 设置主应用基础路由为main-react17(用于后续部署)，则子应用基础路由(baseroute)为/main-react17/xxx
    <BrowserRouter basename='/main-react17'>
      <SideBar />
      <div id='router-container'>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/app-angular11">
            <Suspense fallback={<div>Loading...</div>}>
              <Angular11 />
            </Suspense>
          </Route>
          <Route path="/app-nextjs">
            <Suspense fallback={<div>Loading...</div>}>
              <Nextjs />
            </Suspense>
          </Route>
          <Route path="/app-nuxtjs">
            <Suspense fallback={<div>Loading...</div>}>
              <Nuxtjs />
            </Suspense>
          </Route>
          <Route path="/app-react16">
            <Suspense fallback={<div>Loading...</div>}>
              <React16 />
            </Suspense>
          </Route>
          <Route path="/app-react17">
            <Suspense fallback={<div>Loading...</div>}>
              <React17 />
            </Suspense>
          </Route>
          <Route path="/app-vite">
            <Suspense fallback={<div>Loading...</div>}>
              <Vite />
            </Suspense>
          </Route>
          <Route path="/app-vue2">
            <Suspense fallback={<div>Loading...</div>}>
              <Vue2 />
            </Suspense>
          </Route>
          <Route path="/app-vue3">
            <Suspense fallback={<div>Loading...</div>}>
              <Vue3 />
            </Suspense>
          </Route>
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
