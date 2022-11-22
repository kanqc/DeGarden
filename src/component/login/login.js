import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./login-form.css";
import * as Constant from '../../constants';
import axios from "axios";

export default function Login() {
  const [account, setAccount] = useState({username :"", pass:""});
  const [userDetail, setUserDetail] = useState({});
  const [message, setMessage] = useState({});
  const [error, setError] = useState("")
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
