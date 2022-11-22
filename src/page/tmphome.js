import React, { useContext, useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/Footer';
import Product from '../component/product/Product';
import Banner from '../component/banner/Banner';
import Central from '../component/central/Central';
import Button from '../component/button/Button';
import bannerPic from '../assets/images/banner.png'
import subBannerPic from '../assets/images/sub-banner.png'
import CartPage from './CartPage';
import { productContext } from '../Context/ProductContext';

function Home(){
    const [products, setProducts] = useContext(productContext);
    const newProducts = products.slice(-4);
    return(
        <div>   
            <Banner pic={bannerPic}></Banner>
            <Central text='New Arrival'></Central> 
            <Product cateProduct={newProducts}></Product>
            <Banner pic={subBannerPic}></Banner>
            <Central text='Workshop'></Central> 
            <Footer></Footer>
        </div>
    )
}

export default Home;