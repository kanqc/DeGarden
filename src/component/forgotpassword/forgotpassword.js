import React from "react";
import "./forgotpassword.css";

export default function Forgotpassword() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Tìm tài khoản </h3>
          <div className="form-group mt-3">
            <label>Vui lòng nhập email của bạn </label>
            <input
              type="name"
              placeholder="Email"
              className="form-control mt-1"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn_forgotpassword">
              Lấy lại mật khẩu
            </button>
            <button type="submit" className="btn_k">
              Hủy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
