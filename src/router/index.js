import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import NewsCard from '../components/NewsCard.vue'
import ANewsCard from '../components/ANewsCard.vue'
import Review from '../components/AReview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/news',
      name: 'allnews',
      component: NewsCard
    },
    {
      path: '/a-news-card/:name',
      name: 'ANewsCard',
      component: ANewsCard,
      props: true
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
