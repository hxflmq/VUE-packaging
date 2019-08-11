export default [
  {
    path: 'eventDefine',
    component: resolve => require(['../views/resource/eventDefine/EventDefine.vue'], resolve),
    meta: {title: '事件定义', requiresAuth: true}
  }
]
