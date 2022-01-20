import Icon from '@/components/Icon/index.vue'
import CupCard from '@/components/Pages/CupCard.vue'
import PageContainer from '@/components/Pages/PageContainer.vue'

// 注册
export default (app: any) => {
  app.component('Icon', Icon)
  app.component('CupCard', CupCard)
  app.component('PageContainer', PageContainer)
}
