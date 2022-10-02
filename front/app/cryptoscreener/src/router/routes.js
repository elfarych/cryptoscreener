
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: { name: 'p2p' }, component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/p2p',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'p2p', component: () => import('src/pages/p2p/page-p2p') }
    ]
  },

  {
    path: '/hodlers',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'hodlers', component: () => import('src/pages/hodlers/page-hodlers') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
