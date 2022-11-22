import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../pages/csspage/Customers.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Table from "../components/table/Table";
import * as Customerservices from "../ApiServices/customerservices";
import FormDialog from "../components/dialog/dialogcustomer";

const Customers = () => {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

  useEffect(() => {
    const fetchData = async () => {
      const queryUser = await axios.post(Customerservices.GRAPHQL_API, {
        query: Customerservices.get_Users,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzM1NWE3NzJhYWYwMzM2MDVlYzNlOWEiLCJyb2xlIjoiQURNSU5fUk9MRSIsImlhdCI6MTY2OTEzOTMwMSwiZXhwIjoxNjcxNzMxMzAxfQ.m21ryLMqGkmPemWjs_m-r8K67OpN7ga5in49W-j-CYU'
        }
      });
      console.log(queryUser)
      // const result = queryUser.data.data;
      // setData(result.getAllUsers.data);
      
    };

    fetchData();
  }, []);

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item._id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>{item.password.substring(0, 8) + "...."}</td>
      <td>{item.gender}</td>
      <td>{item.role}</td>

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
                bodyData={data}
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
