import { defineClientConfig } from 'vuepress/client'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    app.component('RepoCard', RepoCard)
    app.component('NpmBadge', NpmBadge)
    app.component('NpmBadgeGroup', NpmBadgeGroup)
    app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    // app.component('CustomComponent', CustomComponent)
  },
  setup() {
    // 页面加载完成后执行
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        // 添加页面进入动画
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
          pageContent.classList.add('animate-enter');
        }
      });
    }
  }
})
