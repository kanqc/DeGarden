import React, { useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Navbar.css';
import { CategoryContext } from '../../Context/CategoryContext';

function Navbar(){
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
    const [fix, setFix] = useState(false);
    let login = false;
    let userData = useState({});
    const [accessToken, setAccessToken] = useState("");

    if(window.localStorage.getItem('LOGIN')){
        login = true;
        let receiveFromLocal = window.localStorage.getItem('USER_LOGIN_DATA');
        userData = JSON.parse(receiveFromLocal);
    }
    const stickyNavbar = () =>{
        if(window.scrollY >= 100){
            setFix(true);
        }else {
            setFix(false);
        }
    }
    window.addEventListener('scroll', stickyNavbar);
    const [click, setclick] = useState(false);
    const handleClick = () =>{
        setclick(!click);
    }
    const [categories, setCategories] = useContext(CategoryContext);
    const logout = (e) => {
        window.localStorage.removeItem('USER_LOGIN_DATA');
        window.localStorage.removeItem('USER_ACCESS_TOKEN');
        window.localStorage.removeItem('LOGIN')
        window.location.reload(false)
    }
    // console.log(categories)
        return(
            <div>
            <nav className={fix? 'navbar sticky' : 'navbar'}>
                <div className='left-navbar'>
                    <div className='product-menu' >
                        <Link to='/Tat-ca-san-pham' style={{textDecoration:'none'}}>
                        <p>SẢN PHẨM <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                        </Link>
                        <div className='product-menu-list'>
                        {categories.map((category, index) => {
                            return (
                                <ul key={category._id}>
                                    <Link to={`/${removeVietnameseTones(category.name)}`} className='nav-link'>
                                        <li> {category.name}</li>
                                    </Link>
                                </ul> 
                            )
                        })}
                    </div>
                </div>  
                </div>
                <div className='logo'>
                    <Link to="/"><img src={Logo} alt='logo'/></Link>
                </div>
                <div className='right-navbar'>
                    <div className='user-menu'>
                            {!login ? "TÀI KHOẢN" : `${userData.name}`}
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            {!login ?  
                            <div className='user-list'>
                                <Link to={'/dang-nhap'} style={{textDecoration: "none"}}>
                                    <li className='user-item'>Đăng nhập</li>
                                </Link>
                                <Link to={'/dang-ky'} style={{textDecoration: "none"}}>
                                    <li className='user-item'>Đăng ký</li>
                                </Link>
                            </div> 
                            : <div className='user-list'>
                            <Link to={'/'} style={{textDecoration: "none"}}>
                                <li className='user-item'>Thông tin tài khoản</li>
                            </Link>
                                <li className='user-item' onClick={logout}>Đăng xuất</li>
                        </div> }
                           
                    </div>
                    <div className='cart-navbar'> 
                        <Link to="/cart" className='cart-navbar'><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                        <span className='item-count'>0</span>
                    </div>
                    <div className='search'>
                        <i class="fa fa-search" aria-hidden="true" onClick={handleClick}></i>
                        <div className='search-item' >
                            <input type="text" style={click ? {display:"block"} : {display:"none"}} placeholder='Tìm kiếm...'></input>
                        </div>
                    </div>
                </div>
            </nav>
            
            </div>
        )
}
export default Navbar 