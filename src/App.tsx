import { useState } from 'react';
import { Button } from 'antd';
import { useRoutes, Link } from 'react-router-dom';
import router from './router';
function App() {
  const [count, setCount] = useState(0);
  const outlet = useRoutes(router);
  return (
    <div className="App">
      {/* 同 vue 里面的 router-link */}
      {/* 类似 vue 中 router-view */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  );
}

export default App;
