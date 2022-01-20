
// 开发环境地址
export const config: Record<string, string> = {
  sidebar: 'http://localhost:4006',
  vue3: 'http://localhost:4009',
  vue2: 'http://localhost:4008'
}

// 线上环境地址
if (process.env.NODE_ENV === 'production') {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach((key) => {
    config[key] = window.location.origin
  })
}

export default config
