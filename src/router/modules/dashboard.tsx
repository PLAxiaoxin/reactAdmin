import { lazy } from 'react';
import lazyLoad from '../utils/lozyLoad';
import { RouteObject } from '../interface';

const dashboardRouter: RouteObject[] = [
  {
    path: '/page1',
    element: lazyLoad(lazy(() => import('@/views/Page1'))),
    meta: {
      requiresAuth: true,
      title: 'page1',
      key: 'page1',
    },
  },
  {
    path: '/page2',
    element: lazyLoad(lazy(() => import('@/views/Page2'))),
    meta: {
      requiresAuth: true,
      title: 'page2',
      key: 'page2',
    },
  },
  {
    path: '/page3',
    element: lazyLoad(lazy(() => import('@/views/Page3'))),
    meta: {
      requiresAuth: true,
      title: 'page3',
      key: 'page3',
    },
  },
];

export default dashboardRouter;
