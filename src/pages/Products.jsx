import React, { useEffect, useState, memo, useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Table from "../components/table/Table";
import FormDialogProduct from "../components/dialog/dialogproduct";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as Productservices from "../ApiServices/productservices";

import img from "../assets/images/user.png";

import "../pages/csspage/Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [nameSearch, setNameSearch] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Search sản phẩm
  const handleSearch = (e) => {
    setNameSearch(e.target.value);
    console.log(nameSearch);
  };
  //Hiển thị sản phẩm
  useEffect(() => {
    const fetchData = async () => {
      const queryProduct = await axios.post(Productservices.GRAPHQL_API, {
        query: Productservices.get_Products,
      });
      const result = queryProduct.data.data;
      setData(result.getAllBonsai.data);
      // console.log("data", result.getAllBonsai.data);
    };

    fetchData();
  }, []);
  // Xóa sản phẩm

  // const handleDelete = async () => {
  //   const DeleteProduct = await axios.post(Productservices.GRAPHQL_API, {
  //     query: Productservices.delete_Products,
  //   });
  //   const result = DeleteProduct.data._id;
  //   setData(result.getAllBonsai.data);
  //   console(data);
  // };

  //đưa các thuộc tính từ trang products qua trang sửa(updateproduct)
  const setToUpdate = (index) => {
    // console.log("updte", data[index]);
    localStorage.setItem("detailProduct", JSON.stringify(data[index]));

    // localStorage.setItem("id", "hello");
  };
  const ProductsTableHead = [
    "STT",
    "Id",
    "Tên Sản Phẩm",
    "Mô Tả",
    "Số Lượng",
    "Giá",
    "Hình Ảnh",
    "Chức Năng",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td style={{ width: "5%" }}>{item._id.substring(0, 10) + "....."}</td>
      <td>{item.name}</td>
      <td>{item.description.substring(0, 30) + "......"}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <img
          style={{
            width: "8em",
            height: "5em",
            borderRadius: "13px",
          }}
          src={item.image}
        ></img>
      </td>
      <td>
        <div className="btn-gr">
          <Link to="/UpdateProducts">
            <button
              className="btn-update"
              onClick={() => {
                // if (window.confirm("Update the item?")) {
                setToUpdate(index);

                // }
              }}
            >
              Sửa{" "}
            </button>
          </Link>

          <button
            className="btn-delete"
            onClick={() => {
              if (window.confirm("Delete the item?")) {
                // handleDeltete();
                //  handleDelete(item["id"]);
              }
            }}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
  return (
    <div>
      <h2 className="page-header"> Sản Phẩm</h2>

      <div className="topnav__search">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm"
          onChange={handleSearch}
        />
        <i className="bx bx-search"></i>
      </div>

      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          +Thêm
        </Button>
      </Grid>
      <div className="row">
        <div className="col-12">
          <div className="product">
            <div className="product__body">
              <Table
                limit="10"
                headData={ProductsTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={data}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
          <FormDialogProduct open={open} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default memo(Products);
