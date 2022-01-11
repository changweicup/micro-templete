export interface MenuRecordRaw {
  path: string,
  name: string,
  title?: string,
  icon?: string,
  children?: Array<MenuRecordRaw>
}

export const menus: Array<MenuRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    title: 'Home',
    icon: 'Menu'
  },
  {
    path: '/authority',
    name: 'Authority',
    title: '权限管理',
    icon: 'Menu',
    children: [
      {
        path: '/authority/users',
        name: 'Users',
        title: '用户列表',
        icon: 'Menu'
      },
      {
        path: '/authority/roles',
        name: 'Roles',
        title: '角色列表',
        icon: 'Menu'
      },
      {
        path: '/authority/resource',
        name: 'Resource',
        title: '资源列表',
        icon: 'Menu'
      }
    ]
  },
  {
    path: '/app-vue2',
    name: 'app-vue2',
    title: 'app-vue2',
    icon: 'Menu'
  },
  {
    path: '/app-vue3',
    name: 'app-vue3',
    title: 'app-vue3',
    icon: 'Menu'
  }
]
