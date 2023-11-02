import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from './pages/Home/Home.jsx';
import Header from "./components/Header/Header.component.jsx";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/home', element: <Home /> }
  ]);

  return routes;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
        <Header />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
