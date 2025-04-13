---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    background: tint-plate
    hero:
      name: F-Blog
      tagline: 分享技术与灵感
      text: 「在思考与表达之间，找到数字世界的诗意栖居」
      image: '/plume.svg'
      actions:
        -
          theme: brand
          text: 开始阅读
          link: /blog/
        -
          theme: alt
          text: Github →
          link: https://github.com/
  -
    type: features
    features:
      -
        title: 技术探索
        details: 分享前沿技术、编程技巧与实用工具，让编程之路更加顺畅
        icon: 🚀
      -
        title: 思维碰撞
        details: 记录思考过程与学习心得，探索问题解决的多种可能性
        icon: 💡
      -
        title: 生活点滴
        details: 分享日常感悟与生活态度，寻找技术与生活的平衡点
        icon: 🌱
  -
    type: content
    theme: normal
    content: |
      ## 最新文章

      <VPTeamMembers size="small" :members="blogList" />
  -
    type: content
    theme: alt
    content: |
      ## 关于我
      
      热爱技术，乐于分享。相信代码可以改变世界，也相信文字可以传递思想。
      
      这个博客是我的数字花园，记录我在技术世界的探索和思考。
      
      <div class="text-center">
        <p style="opacity: 0.7">「所思，所想，所感，皆记于此」</p>
      </div>
---

<script setup>
const blogList = [
  {
    avatar: '/plume.svg',
    name: '技术分享文章',
    title: '如何提高代码质量',
    links: [{ link: '/blog/', icon: 'article' }]
  },
  {
    avatar: '/plume.svg',
    name: '学习笔记',
    title: '前端框架对比与选择',
    links: [{ link: '/blog/', icon: 'article' }]
  },
  {
    avatar: '/plume.svg',
    name: '随想札记',
    title: '关于持续学习的思考',
    links: [{ link: '/blog/', icon: 'article' }]
  },
]
</script>

<style>
.text-center {
  text-align: center;
}
</style>
