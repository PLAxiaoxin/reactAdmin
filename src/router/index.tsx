import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from '@/router/interface';
import Login from '@/views/Login';

// * 导入所有router
const metaRouters: object = import.meta.globEager('./modules/*.tsx');
console.log(metaRouters);

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

export const rootRouter: RouteObject[] = [
  // 嵌套路由
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: true,
      title: '登陆页',
      key: 'login',
    },
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
];

// const Router = () => {
//   const routes = useRoutes(rootRouter);
//   return routes;
// };

export default rootRouter;
