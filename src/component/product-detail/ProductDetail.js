import React, {useState, createContext, useContext} from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import Button from '../button/Button';
import Footer from '../footer/Footer';
import { productContext } from '../../Context/ProductContext';
import { CartContext } from '../../Context/CartContext';
import Product from '../product/Product';

function ProductDetail({productDetail}) {
    // const product = useParams();
   
    const [product, setProduct] = [productDetail];
    const [products, setProducts] = useContext(productContext);
    const cart = useContext(CartContext)
    const cateID = product.categoryId;
    const sameProduct = products.filter( productt =>{
        return productt.categoryId === cateID && productt._id != product._id;
    })
    const sameProducts = sameProduct.slice(-4);
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
    return (
        <div>
            <div className='product-detail-container'>
                <div className='product-detail-left'>
                    <img src={product.image} alt="aaaa" className='product-detail-img'></img>
                </div>
                <div className='product-detail-right'>
                    <p className='product-detail-name'>{product.name}</p>
                    <p className='product-detail-price'>{Intl.NumberFormat().format(product.price)} đ</p>
                    <p className='product-detail-decribtion'>{product.description}</p>
                    <p className='product-detail-quantity'>Số lượng: <input type={'number'} placeholder='1' className='input-quantity'></input></p>
                    <div><Button onClick={()=>{cart.handleAddToCart(product)}} type="button"  buttonStyle="btn--addToCart--detail">Thêm vào giỏ</Button></div>
                </div>
            </div>
            <h2 className='same-product'>Sản phẩm tương tự</h2>
            <Product cateProduct={sameProducts}></Product>
            <Footer></Footer>
        </div>
    )
}

export default ProductDetail;