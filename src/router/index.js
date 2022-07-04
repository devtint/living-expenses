import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/layout/layout.vue'),
    meta: {
      keepAlive: true, // 此组件需要被缓存
      // deepth: 1,
    },
    children: [
      {
        path: '',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
        meta: {
          keepAlive: true, // 此组件需要被缓存
          // deepth: 1,
        },
      },
    ],
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "my" */ '@/views/my/my.vue'),
  },
  {
    path: '/orders',
    name: 'orders',
    component: () =>
      import(/* webpackChunkName: "orders" */ '@/views/orders/orders.vue'),
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import('@/views/home/pages/orderRules.vue'),
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('@/views/manage/manage.vue'),
  },
  {
    path: '/sewage',
    name: 'sewage',
    component: () => import('@/views/sewage/sewage.vue'),
  },
  {
    path: '/shops',
    name: 'shops',
    component: () => import('@/views/shops/shops.vue'),
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: () => import('@/views/confirm/confirm.vue'),
  },
  {
    path: '/over',
    name: 'over',
    component: () => import('@/views/confirm/over.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/auth/auth.vue'),
  },
  {
    path: '/bind',
    name: 'bind',
    component: () => import('@/views/auth/components/bind.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
