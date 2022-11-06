import React, { lazy } from 'react';
import Home from '../views/Home';

const Abot = lazy(() => import('../views/Abot'));
const Page1 = lazy(() => import('../views/Page1'));
const Page2 = lazy(() => import('../views/Page2'));

const withLoadingComponent = (Comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loding...</div>}>{Comp}</React.Suspense>
);

// 重定向组件
import { Navigate } from 'react-router-dom';
const routes = [
  // 嵌套路由
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/abot',
        element: withLoadingComponent(<Abot />),
      },
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
];
export default routes;
