// 组件形式的写法儿
import App from '../App';
import Home from '../views/Home';
import Abot from '../views/Abot';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// 两种路由模式： BrowserRouter（History模式）HashRuter （Hash模式）

// const baseRouter = ()=> { return ()} 有逻辑需要这么写
const baseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* 访问 / 重定向到 /home */}
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/abot" element={<Abot />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default baseRouter;
