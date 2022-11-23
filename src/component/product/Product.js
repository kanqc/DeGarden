import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import './Product.css';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Constant from '../../constants';
import { CartContext } from '../../Context/CartContext';
function Product({cateProduct}){
    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.split(" ").join("-");
        return str;
    }
    const [products, setProducts] = [cateProduct];
    const cart = useContext(CartContext);

    //  console.log(products);
    let imageName = '';
    return(
        <div className='container'>
            <div className='product-list'>
                {
                    products.map((product,index) => (
                    <div className='product-item' key={product._id}>
                        <Link to={`/product/${removeVietnameseTones(product.name)}`}>
                        <img src={product.image} alt='temp-pic'></img>
                        <i class="fa fa-search product-info" aria-hidden="true"></i>
                        </Link>
                        <div className='product-item-content'>
                                    <Link to={`/product/${removeVietnameseTones(product.name)}`} style={{textDecoration:"none", display:"flex", flexDirection:"column",flex:"1"}}>
                                    <div class="product-item-top">
                                        <p className='product-name'>{product.name}</p>
                                        <div className='price'>{Intl.NumberFormat().format(product.price)}đ</div>
                                    </div>
                                    </Link>
                            <div className='product-item-bottom'>
                                <Button onClick={()=> cart.handleAddToCart(product)} type="button" buttonStyle="btn--addToCart--card">Thêm vào giỏ </Button>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Product;