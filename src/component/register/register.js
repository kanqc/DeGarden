import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <fieldset>
            <legend><i class="fa fa-user-circle" aria-hidden="true"></i></legend>
                <p>ĐĂNG KÝ</p>
                <label >Họ và tên: </label>
                <input type="text" id="name" name="name" ></input>
                <label >Tên đăng nhập:</label>
                <input type="text" id="uname" name="uname" ></input>
                <label >Mật khẩu:</label>
                <input type="password" id="pass" name="pass" ></input>
                <label >Số điện thoại: </label>
                <input type="text" id="pnumber" name="pnumber" ></input>
                <label>Giới tính: </label>
                <select id="gender" name="gender">
                  <option value={"Male"}>Nam</option>
                  <option value={"Fermale"}>Nữ</option>
                </select>
                <label >Địa chỉ:</label>
                <input type="text" id="address" name="address" ></input>
                <input type="submit" value="ĐĂNG KÝ" class="btn-reg" onClick={()=>{navigate("/get-otp")}}></input>
        </fieldset>
    </form>
    </div>
  );
}
