export type ThemeConfigTypes = {
  PrimaryColor: string;
  title: string;
  HeaderHeight: number;
  SlideMenuWidth: number;
  SlideMenuMinWidth: number;
  isTagsMenu: boolean
};

export const ThemeConfig: ThemeConfigTypes = {
  // 主题色
  PrimaryColor: '#b37feb',

  // title
  title: 'Cup Games',

  // 头部栏高度
  HeaderHeight: 48,

  // 侧栏展开宽度
  SlideMenuWidth: 235,

  // 侧栏关闭宽度
  SlideMenuMinWidth: 70,

  // 是否显示页签菜单
  isTagsMenu: true
}

document.title = ThemeConfig.title

export default ThemeConfig
