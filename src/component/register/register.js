import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form-input">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Đăng Ký </h3>
          <div className="form-group mt-3">
            <label>Họ và Tên </label>
            <input type="name" className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>Họ và Tên </label>
            <input type="email" className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>Địa chỉ </label>
            <input type="address" className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>Số điện thoại </label>
            <input type="phone" className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>Giới tính</label>
            <select className="select-sex">
              <option value="male">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label>Mật khẩu </label>
            <input type="password" className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>Nhập lại mật khẩu </label>
            <input type="passsword" className="form-control mt-1" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn_register">
              Đăng Ký
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
