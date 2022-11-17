import React, { useState, userEffect } from "react";
import { Link } from "react-router-dom";

import "../pages/csspage/Customers.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Table from "../components/table/Table";
import customerList from "../assets/Data/customers-list.json";

import FormDialog from "../components/dialog/dialogcustomer";
const customerTableHead = [
  "STT",
  "Id",
  "Họ Tên",
  "Email",
  "Số điện thoại",
  "Địa chỉ",
  "Mật Khẩu",
  "Giới Tính",
  "Quyền",
  "Chức Năng",
];
const handleDelete = () => {};
const setToUpdate = () => {};

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.gender}</td>
    <td>{item.location}</td>
    <td>
      <div className="btn-gr">
        <Link to="/Updatecustomer">
          <button onClick={() => setToUpdate()} className="btn-update">
            Sửa{" "}
          </button>
        </Link>

        <button onClick={() => handleDelete()} className="btn-delete">
          Xóa
        </button>
      </div>
    </td>
  </tr>
);

const Customers = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <h2 className="page-header">Người Dùng</h2>
      <div className="topnav__search">
        <input type="text" placeholder="Tìm kiếm người dùng" />
        <i className="bx bx-search"></i>
      </div>
      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          +Thêm
        </Button>
      </Grid>
      <div className="row">
        <div className="col-12">
          <div className="customer">
            <div className="customer__body">
              <Table
                limit="5"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
          <FormDialog open={open} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default Customers;
