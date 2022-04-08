import './App.css';
import ProductPage from './app/modules/product/product-list/pages/product-page'
import { Router, Outlet, ReactLocation} from 'react-location'
import ProductPageDetail from './app/modules/product/product-detail/pages/product-detail-page';

const routes = [
  {
    path : '/',
    element : <div> Home page</div>
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
    <Router routes={routes} location={location}>
    <div className="App">
      {/* poner navbar aca */}
      <h1> Hello </h1>
      <Outlet />
    </div>
    </Router>
  );
}

export default App;
