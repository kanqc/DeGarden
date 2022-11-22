import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login-form.css";
import * as Constant from '../../constants';
import axios from "axios";

export default function Login() {
  // window.localStorage.removeItem('USER_LOGIN_DATA');
  // window.localStorage.removeItem('USER_ACCESS_TOKEN');
  // window.localStorage.removeItem('LOGIN')
  const [account, setAccount] = useState({username :"", pass:""});
  const [userDetail, setUserDetail] = useState({});
  const [message, setMessage] = useState({});
  const [error, setError] = useState(" ")

  const navigate = useNavigate();
  const onChange = (e) =>{
    setAccount({...account , [e.target.name] : e.target.value});

  }
  useEffect(() => {
    const data = async() =>{
        const queryRes = await axios.post(
            Constant.GRAPHQL_API,{
                query: Constant.getLogin,
                variables:
                {
                  "email": account.username,
                  "password": account.pass,
                  "rememberMe": true,
                }
            },
        );
        const res = queryRes.data.data.login;
        setMessage(res)
        setUserDetail(res.user)
    };
    data();
},[account]);
  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(message)
    console.log(userDetail)
     if(!message.status){
    let tmp = message.message.split(":")
     setError(tmp[1])
     console.log(error)
    }else{
      let accessToken = message.access_token.split(" ")[1];
      window.localStorage.setItem('USER_LOGIN_DATA',JSON.stringify(userDetail));
      window.localStorage.setItem('USER_ACCESS_TOKEN',JSON.stringify(accessToken));
      window.localStorage.setItem('LOGIN',true)
      window.location.href="/";
    }
    
  }
  return(
    <form onSubmit={sumbitHandler} >
    <fieldset>
        <legend><i class="fa fa-user-circle" aria-hidden="true"></i></legend>
            <p>ĐĂNG NHẬP</p>
            <p className="error">{!message.status ? `${error}` : ""}</p>
            <input type="text" id="uname" name="username" placeholder="Tên đăng nhập" onChange={onChange} value={account.username}></input>
            <input type="password" id="pass" name="pass" placeholder="Mật khẩu" onChange={onChange} value={account.pass}></input>
            <input type="submit" value="ĐĂNG NHẬP" class="btn-log" ></input>
            <div class="reg">Bạn chưa có tài khoản? <Link to={"/dang-ky"}>Đăng ký</Link></div>
    </fieldset>
    </form> 
)
}
