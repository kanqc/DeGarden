import React from "react";
import "./otpmail.css";

export default function Otpmail() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Nhập mã OTP</h3>
          <div className="form-group mt-3">
            <label>Vui lòng nhập mã OTP đã gửi qua email của bạn </label>
            <input type="number" placeholder="" className="form-control mt-1" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn_continue">
              Tiếp Tục
            </button>
            <button type="submit" className="btn_cancel">
              Hủy
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="#">Bạn chưa có mã?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
