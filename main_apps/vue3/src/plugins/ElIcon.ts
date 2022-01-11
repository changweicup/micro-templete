import {
  Location,
  Document,
  Menu,
  Close,
  Setting,
  Fold
} from '@element-plus/icons-vue'

// 所需的组件
export const components = [
  Location,
  Document,
  Menu,
  Close,
  Setting,
  Fold
]
// 注册
export default (app: any) => {
  components.forEach((component) => {
    app.component(`el-${component.name}-icon`, component)
  })
}
