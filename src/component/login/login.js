import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login-form.css";

export default function Login({ settoken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return(
    <form >
    <fieldset>
        <legend><i class="fa fa-user-circle" aria-hidden="true"></i></legend>
            <p>ĐĂNG NHẬP</p>
            <input type="text" id="uname" name="uname" placeholder="Tên đăng nhập"></input>
            <input type="password" id="pass" name="pass" placeholder="Mật khẩu"></input>
            <input type="submit" value="ĐĂNG NHẬP" class="btn-log"></input>
            <div class="reg">Bạn chưa có tài khoản? <Link to={"/dang-ky"}>Đăng ký</Link></div>
    </fieldset>
    </form> 
)
}
