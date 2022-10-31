import React, { useState } from "react";
import "./login-form.css";

export default function Login({ settoken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Đăng Nhập </h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Mật Khẩu"
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn_login">
              Đăng Nhập
            </button>
            <button type="submit" className="btn_dk">
              Đăng Ký
            </button>
          </div>
          <div className="forgot-password">
            <a href="#"> Quên mật khẩu?</a>
          </div>
        </div>
      </form>
    </div>
  );
}
