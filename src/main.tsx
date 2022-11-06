import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css'; // 样式初始化
import BaseRouter from './router';
// UI框架样式
import '@/assets/styles/global.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// 组件样式

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
