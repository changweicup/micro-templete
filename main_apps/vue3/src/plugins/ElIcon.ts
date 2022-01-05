import {
  Location,
  Document,
  Menu,
  Close,
  Setting
} from '@element-plus/icons-vue'

// 所需的组件
export const components = [
  Location,
  Document,
  Menu,
  Close,
  Setting
]
// 注册
export default (app: any) => {
  components.forEach((component) => {
    app.component(`el-${component.name}-icon`, component)
  })
}
