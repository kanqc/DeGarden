import React from 'react';
import Login from '../component/login/login';
import otpmail from '../component/otpmail/otpmail';
import Register from '../component/register/register';
import { Link } from 'react-router-dom';
import Footer from '../component/footer/Footer';

function LoginPage(){
    return(
        <div>
            <Login></Login>
            <Footer></Footer>
        </div>
    )
}

export default LoginPage