import './App.css';
import ProductPage from './app/modules/product/product-list/pages/product-page'
import {BrowserRouter, Route, Routes} from 'react-router-dom' ;
import ProductPageDetail from './app/modules/product/product-detail/pages/product-detail-page';
import Navbar from './app/layout/navbar/components/Navbar';
import Login from './app/modules/auth/login/Login';
import  { UserContextProvider } from './app/context/User.context';
import PrivateRoute  from './app/modules/auth/privateRoute/PrivateRoute'
import Signup from './app/modules/auth/signup/Signup';
import { CartContextProvider } from './app/context/Cart.context';
import CartPage from './app/modules/cart/cart-checkout/page/cart-page';
import ProductPageUpdate from './app/modules/product/product-form/pages/product-page-update';
import ProductPageCreate from './app/modules/product/product-form/pages/product-page-create';
import UserPageProfile from './app/modules/user/user-profile/pages/user-profile-page';

function App() {

  return (
    <>
    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<PrivateRoute > <ProductPage /> </PrivateRoute>} />
              <Route path='/products' element={<PrivateRoute > <ProductPage /> </PrivateRoute>}/>
              <Route path='/products/:category' element={<PrivateRoute > <ProductPage /> </PrivateRoute>}/>
              <Route path='/product/update/:id' element={<PrivateRoute > <ProductPageUpdate /> </PrivateRoute>}/>
              <Route path='/product/create' element={<PrivateRoute > <ProductPageCreate /> </PrivateRoute>}/>
              <Route path='/product/:id' element={<PrivateRoute > <ProductPageDetail /> </PrivateRoute>}/>
              <Route path='/user' element={<PrivateRoute > <UserPageProfile /> </PrivateRoute>}/>
              <Route path='/cart' element={<PrivateRoute > <CartPage /> </PrivateRoute>}/>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </UserContextProvider>
    </>
  );
}

export default App;
