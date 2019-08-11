export default [
  {
    path: 'functionManagement',
    component: resolve => require(['../views/management/functionManagement/FunctionManagement.vue'], resolve),
    meta: {title: '功能管理', requiresAuth: true}
  },
  {
    path: 'roleManagement',
    component: resolve => require(['../views/management/roleManagement/RoleManagement.vue'], resolve),
    meta: {title: '角色管理', requiresAuth: true}
  },
  {
    path: 'accountManagement',
    component: resolve => require(['../views/management/accountManagement/AccountManagement.vue'], resolve),
    meta: {title: '用户菜单设定', requiresAuth: true}
  },
  {
    path: 'limitsManagement',
    component: resolve => require(['../views/management/limitsManagement/LimitsManagement.vue'], resolve),
    meta: {title: '角色权限管理', requiresAuth: true}
  },
  {
    path: 'applicationManagement',
    component: resolve => require(['../views/workflow/applicationManagement/ApplicationManagement.vue'], resolve),
    meta: {title: '应用管理', requiresAuth: true}
  },
  {
    path: 'workflowManagement',
    component: resolve => require(['../views/workflow/workflowManagement/WorkflowManagement.vue'], resolve),
    meta: {title: '流程管理', requiresAuth: true}
  },
  {
    path: 'workflowDefine',
    name: 'workflowDefine',
    component: resolve => require(['../views/workflow/workflowDefine/WorkflowDefine.vue'], resolve),
    meta: {title: '流程定义', requiresAuth: true}
  },
  {
    path: 'workflowShow',
    component: resolve => require(['../views/workflow/workflowShow/WorkflowShow.vue'], resolve),
    meta: {title: '流程查看', requiresAuth: true}
  }
]
