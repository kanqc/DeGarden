import React from "react";
import "./newpassword.css";

export default function Newpassword() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Đặt mật khẩu </h3>

          <div className="form-group mt-3">
            <label>Nhập mật khẩu mới </label>
            <input type="password" className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>Nhập lại mật khẩu</label>
            <input type="password" className="form-control mt-1" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn_contn">
              Tiếp tục
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
