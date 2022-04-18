import './App.css';
import ProductPage from './app/modules/product/product-list/pages/product-page'
import { Router, Outlet, ReactLocation} from 'react-location'
import ProductPageDetail from './app/modules/product/product-detail/pages/product-detail-page';
import Navbar from './app/layout/navbar/components/Navbar';
import Login from './app/modules/auth/login/Login';
import { Link } from 'react-router-dom';
const routes = [
  {
    path : '/',
    element : <div> Home page</div>
  },
  {
    path : 'login/',
    element : <Login />
  },
  {
    path : 'products/',/*
    children: [
      {
        path:':id',
        element : <ProductPageDetail />
      }
    ],*/
    element : <ProductPage />
  },
  {
    path : 'products/:id',
    element : <ProductPageDetail />

  },
]

function App() {
  const location = new ReactLocation();
  return (
    <>
      <Router routes={routes} location={location}>
        <div className="App">
          <Navbar />
          <Outlet />
        </div>
      </Router>
    </>
  );
}

export default App;
