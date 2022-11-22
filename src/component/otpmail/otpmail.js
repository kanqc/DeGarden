import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./otpmail.css";
import * as Constant from '../../constants';
import axios from "axios";


export default function Otpmail() {
  let userDetail= useState({})
  const navigate = useNavigate();
  const [codeMessage, setCodeMessage] = useState({})
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [activeCode, setActiveCode] = useState("")
  let retrieveFromLocal = window.localStorage.getItem('MY-USER-REGISTER-DETAIL') 
  userDetail = JSON.parse(retrieveFromLocal);
  console.log(userDetail)

  const onChange = e=>{
    setActiveCode(e.target.value);
  }
  useEffect(() => {
    const data = async() =>{
        const queryRes = await axios.post(
            Constant.GRAPHQL_API,{
                query: Constant.sendActiveCode,
                variables:
                {
                  "email": userDetail.email
                }
              
            },
        );
        const res = queryRes.data.data.sendActiveCode;
        setData(res)
    };
    data();
},[]);
  useEffect(() => {
    const data = async() =>{
        const queryRes = await axios.post(
            Constant.GRAPHQL_API,{
                query: Constant.activeUserActiveCode,
                variables:
                {
                  "id": userDetail._id,
                  "code": activeCode
                }
              
            },
        );
        const res = queryRes.data.data.activeByIdAndCode;
        setCodeMessage(res)
    };
    data();
  },[activeCode]);
  
  const submitHandler = e =>{
    e.preventDefault();
  window.localStorage.removeItem('MY-USER-REGISTER-DETAIL')
  if(!codeMessage.status){
    let tmp = codeMessage.message.split(":")
     setError(tmp[1])
     console.log(error)
    }else{
      navigate('/dang-nhap')
    }
  }
  return (
    <form onSubmit={submitHandler} >
      <fieldset>
      <legend><i class="fa fa-file-text" aria-hidden="true"></i></legend>
          <p>NHẬP MÃ OTP</p>
          <p className="error">{!codeMessage.status ? `${error}` : ""}</p>
          <input type="text" id="otp" name="otp" placeholder="Mời bạn nhập mã" onChange={onChange}></input>
          <input type="submit" value="XÁC NHẬN" class="btn-access" ></input>   
        </fieldset>
    </form>
  );
}
