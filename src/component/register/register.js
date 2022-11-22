import React, { useState , useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Constant from '../../constants';
import "./register.css";

export default function Register() {
  const [user, setUser] = useState({name: "", email: "", pass: "", phoneNumber: "", gender: "", address: ""});
  const [userDetail, setUserDetail] = useState({});
  const [message, setMessage] = useState("NULL");
  const [error, setError] = useState("");
  const navigate = useNavigate();
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
  const onChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
  };
 
  useEffect(() => {
    const data = async() =>{
        const queryRes = await axios.post(
            Constant.GRAPHQL_API,{
                query: Constant.getRegister,
                variables:
              {
                "user": {
                  "address": user.address,
                  "avatar": `${removeVietnameseTones(user.name)}.jpg`,
                  "email": user.email,
                  "gender": user.gender,
                  "name": user.name,
                  "password": user.pass,
                  "phone": user.phoneNumber
                }
              }
            },
        );
        const res = queryRes.data.data.register;
        setMessage(res)
        setUserDetail(res.data)
    };
    data();
},[user]);
  const sumbitHandler = e=>{
    e.preventDefault();
    console.log(userDetail);
    document.documentElement.scrollTop = 0;
    window.localStorage.setItem('MY-USER-REGISTER-DETAIL',JSON.stringify(userDetail));
    if(!message.status){
    let tmp = message.message.split(":")
     setError(tmp[1])
     console.log(error)
    }else{
      navigate('/nhap-otp')
    }
  };
  
  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <fieldset>
            <legend><i class="fa fa-user-circle" aria-hidden="true"></i></legend>
                <p>ĐĂNG KÝ</p>
                <p className="error">{!message.status ? `${error}` : ""}</p>
                <label >Họ và tên: </label>
                <input type="text" id="name" name="name" onChange={onChange} value={user.name}></input>
                <label >Tên đăng nhập:</label>
                <input type="text" id="uname" name="email" onChange={onChange} value={user.email}></input>
                <label >Mật khẩu:</label>
                <input type="password" id="pass" name="pass" onChange={onChange} value={user.pass}></input>
                <label >Số điện thoại: </label>
                <input type="text" id="pnumber" name="phoneNumber" onChange={onChange}  value={user.phoneNumber}></input>
                <label>Giới tính: </label>
                <select id="gender" name="gender" onChange={onChange} value={user.gender}>
                  <option value={"default"}>Chọn giới tính</option>
                  <option value={"Nam"}>Nam</option>
                  <option value={"Nữ"}>Nữ</option>
                </select>
                <label >Địa chỉ:</label>
                <input type="text" id="address" name="address"onChange={onChange} value={user.address} ></input>
                <input type="submit" value="ĐĂNG KÝ" class="btn-reg" ></input>
        </fieldset>
    </form>
    </div>
  );
}
