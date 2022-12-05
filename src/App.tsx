import { useRoutes } from 'react-router-dom';
import router from './router';

function App() {
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
