 let asyncRouter = [
    {
      path: '/one',
      component:()=>import('@/views/One.vue'),
      name: '管理员权限',
      meta: { role:'admin' }, //页面需要的权限
    },
      { 
        path: '/two',
        component:()=>import('@/views/Two.vue'),
        name: '超级管理员权限',
        meta: { role:'super' }  //页面需要的权限
    } 
  ];
  export default asyncRouter;