import { Route, Routes } from 'react-router';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductDetails from './components/ProductsDetails';

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path='/product' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:productID' element={<ProductDetails />} />

      </Routes>
    </>
  )
}

export default App;
