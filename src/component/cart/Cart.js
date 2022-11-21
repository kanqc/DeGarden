import React from 'react';  
import './Cart.css';
import pic from '../../assets/images/logo.png';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

function Cart(){
    return(
        <div className='cart-container'>
            <table className='cart'>
                <tr className='cart-header'>
                    <td colSpan={2}>SẢN PHẨM</td>
                    <td>SỐ LƯỢNG</td>
                    <td >GIÁ</td>
                    <td></td>
                </tr>
                <tr>
                    <td  className='cart-pic'><img src={pic} alt='cart-picc'></img></td>
                    <td>
                        <p className='cart-product-name'>Monstera Deliciosa</p>
                    </td>
                    <td>
                        <input type="number" className='so-luong' placeholder='1'></input>
                    </td>
                    <td>
                        360.000
                    </td>
                    <td>
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </td>
                </tr>
                <tr>
                    <td  className='cart-pic'><img src={pic} alt='cart-picc'></img></td>
                    <td>
                        <p className='cart-product-name'>Monstera Deliciosa</p>
                    </td>
                    <td>
                        <input type="number" className='so-luong' placeholder='1'></input>
                    </td>
                    <td>
                        360.000
                    </td>
                    <td>
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </td>
                </tr> 
                <tr>
                    <td  className='cart-pic'><img src={pic} alt='cart-picc'></img></td>
                    <td>
                        <p className='cart-product-name'>Monstera Deliciosa</p>
                    </td>
                    <td>
                        <input type="number" className='so-luong' placeholder='1'></input>
                    </td>
                    <td>
                        360.000
                    </td>
                    <td>
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </td>
                </tr> 
                
                <tr>
                    <td colSpan={4} className='total'>Tổng</td>
                    <td className='total-price'>
                        360.000
                    </td>
                </tr>
                <tr>
                    <td colSpan={5}>
                        <div className='btn-cart-list'>
                        <Link to='/'><Button onClick={() => (console.log("hello"))} type={Button} buttonStyle={"btn--continute--shopping"}>TIẾP TỤC MUA SẮM</Button></Link>
                        <Button onClick={() => (console.log("hello"))} type={Button} buttonStyle={"btn--payment"}>TIẾN HÀNH THANH TOÁN</Button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Cart;