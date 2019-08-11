export default [
  // 引入元数据管理路由
  {
    path: 'maintainMeta',
    component: resolve => require(['../views/meta/maintainMeta/MaintainMeta.vue'], resolve),
    meta: {title: '元数据结构维护', requiresAuth: true}
  },
  {
    path: 'maintainTable',
    component: resolve => require(['../views/meta/maintainTable/MaintainTable.vue'], resolve),
    meta: {title: '元数据维护', requiresAuth: true}
  },
  {
    path: 'maintainDic',
    component: resolve => require(['../views/meta/maintainDic/MaintainDic.vue'], resolve),
    meta: {title: '词典表维护', requiresAuth: true}
  },
  {
    path: 'maintainFun',
    component: resolve => require(['../views/meta/maintainFun/MaintainFun.vue'], resolve),
    meta: {title: '动态功能设定', requiresAuth: true}
  },
  {
    path: 's_table',
    component: resolve => require(['../views/meta/maintainMenu/MaintainMenu.vue'], resolve),
    meta: {title: '动态功能维护', requiresAuth: true}
  }
]
