
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

  // 在部署后，nextjs和nuxtjs依然和开发环境保持一致，绑定5008和6008端口，这里单独处理
  const { protocol, hostname } = window.location
  config.nextjs = `${protocol}//${hostname}:5008`
  config.nuxtjs = `${protocol}//${hostname}:6008`
}

// if (true) {
//   Object.keys(config).forEach((key) => {
//     config[key] = `http://127.0.0.1:8080`
//   })

//   const { protocol, hostname } = location
//   config.nextjs = `${protocol}//${hostname}:5008`
//   config.nuxtjs = `${protocol}//${hostname}:6008`
// }

export default config
