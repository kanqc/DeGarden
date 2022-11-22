import './App.css'
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './component/navbar/Navbar';
import Home from './page/Home';
import CartPage from './page/CartPage';
import CategoryPage from './page/CategoryPage'
import { CategoryProvider } from './Context/CategoryContext';
import { ProductProvider } from './Context/ProductContext';
import ProductDetailPage from './page/ProductDetailPage';
import ScrollToTop from './component/ScrollToTop';
import Login from './component/login/login'
import AllProductPage from './page/AllProductPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import OtpPage from './page/OtpPage';
function App() {
  return (
    <div>
      <ProductProvider>
      <CategoryProvider>
      <Navbar></Navbar>
          <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/cart' element={<CartPage/>}/>
                  <Route path='/Tat-ca-san-pham' element={<AllProductPage/>}/>
                  <Route path='/:cateTitle' element={<CategoryPage/>}/>
                  <Route path='/product/:productName' element={<ProductDetailPage/>}/>
                  <Route path='/dang-nhap' element={<LoginPage/>}/>
                  <Route path='/dang-ky' element={<RegisterPage/>}/>
                  <Route path='/nhap-otp' element={<OtpPage/>}/>
          </Routes>
          <ScrollToTop/>
      </CategoryProvider>
      </ProductProvider>

    </div>
  )
}

export default App;
