<template>
  <div id="sidebar-app">
    <h4>导航</h4>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
      @select="select"
    >
      <el-menu-item index="/">
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 菜单(el-submenu) index为子应用名称，子菜单(el-menu-item) index为路由地址 -->
      <el-submenu index="appname-vue2">
        <template slot="title">
          <span class='submenu-text'>child-vue2</span>
        </template>
        <el-menu-item index="/app-vue2">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-vue2/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="appname-vue3">
        <template slot="title">
          <span class='submenu-text'>child-vue3</span>
        </template>
        <el-menu-item index="/app-vue3">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-vue3/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="appname-react17">
        <template slot="title">
          <span class='submenu-text'>child-react17</span>
        </template>
        <el-menu-item index="/app-react17">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-react17/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/', // 当前激活菜单的 index
    }
  },
  created () {
    this.getActiveIndex()

    // 监听浏览器前进后退按钮，激活对应菜单
    window.addEventListener('popstate', () => this.getActiveIndex())

    // 判断微前端环境
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 获取基座下发的数据
      this.microAppData = window.microApp.getData()

      // 全局数据监听，监听来自其它子应用页面跳转，控制侧边栏的菜单展示
      // 因为是子应用之间无法直接通信，这里采用全局数据通信
      window.microApp.addGlobalDataListener((data) => {
        if (typeof data.activePage === 'string') {
          // 取activeIndex的基础路由部分，如：'/app-vue2/page2'基础路由为'/app-vue2'
          const basePath = this.activeIndex.split('/').splice(0, 2).join('/')

          // 根据其它子应用传递的页面地址，补全activeIndex
          this.activeIndex = basePath + data.activePage
        }
      })
    }
  },
  methods: {
    // 根据url地址获取选中菜单
    getActiveIndex () {
      // location.pathname的值通常为：/main-angular11/app-vue2/page2，我们只取`/app-vue2/page2`
      const pathArr = location.pathname.match(/\/app-.+/)
      this.activeIndex = pathArr ? pathArr[0].replace(/\/$/, '') : '/'

      // 兼容 child-vite 和 child-react17 子应用，因为它们是hash路由
      if (
        (this.activeIndex === '/app-vite' || this.activeIndex === '/app-react17') &&
        location.hash.includes('page2')
      ) {
        this.activeIndex += location.hash.replace(/^#/, '')
      }

      // 去除斜线后缀，如：/app-vue2/ 转换为 /app-vue2
      if (this.activeIndex !== '/') {
        this.activeIndex = this.activeIndex.replace(/\/$/, '')
      }
    },
    // 用户点击菜单时控制基座应用跳转
    select (index, indexPath) {
      // 防止重复跳转同一页面
      if (this.activeIndex === index) return

      this.activeIndex = index

      if (this.microAppData) {
        // 因为 child-vite 和 child-react17 子应用是hash路由，所以需要传递hash值
        let hash = null
        if (index === '/app-vite/page2' || index === '/app-react17/page2') {
          const pathArr = index.split('/')
          index = '/' + pathArr[1]
          hash = '/' + pathArr[2]
        }

        // 获取子应用appName
        const appName = indexPath[0]

        // 控制基座跳转页面，并渲染子应用
        this.microAppData.pushState(appName, index, hash)
      }
    },
  }
}
</script>

<style>
#sidebar-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: inline-block;
  margin-right: 40px;
  border-right: 1px solid rgb(230, 230, 230);
}

h4 {
  font-weight: revert;
}

.el-menu-item {
  font-size: 16px;
}

.el-menu {
  width: 200px;
  border-right: none;
}

.submenu-text {
  font-size: 16px;
  user-select: none;
}

.menu-item-text {
  font-size: 14px;
  user-select: none;
}
</style>
