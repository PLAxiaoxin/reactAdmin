import { lazy } from 'react';
import lazyLoad from '../utils/lozyLoad';
import { RouteObject } from '../interface';

const errorRouter: Array<RouteObject> = [
  {
    path: '/403',
    element: lazyLoad(lazy(() => import('@/views/Error/403'))),
    meta: {
      requiresAuth: true,
      title: '403页面',
      key: '403',
    },
  },
  {
    path: '/404',
    element: lazyLoad(lazy(() => import('@/views/Error/404'))),
    meta: {
      requiresAuth: true,
      title: '404页面',
      key: '404',
    },
  },
  {
    path: '/500',
    element: lazyLoad(lazy(() => import('@/views/Error/500'))),
    meta: {
      requiresAuth: true,
      title: '500页面',
      key: '500',
    },
  },
];

export default errorRouter;
