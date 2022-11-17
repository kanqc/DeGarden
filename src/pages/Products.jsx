import React, { useEffect, useState, memo, useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import * as productservices from "../ApiServices/productservices";
import Table from "../components/table/Table";
import FormDialogProduct from "../components/dialog/dialogproduct";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import axios from "axios";

import "../pages/csspage/Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Hiển thị sản phẩm
  useEffect(() => {
    const fetchData = async () => {
      const query = await axios.get(productservices.GRAPHQL_API, {
        query: productservices.getProducts,
      });
      setProducts(query);
      console.log(query);
      console.log("hello");
    };
    fetchData();
  }, []);

  //đưa các thuộc tính từ trang products qua trang sửa(updateproduct)
  const setToUpdate = (id, TenSanPham, MoTa, SoLuong, Gia, Hinhanh) => {
    localStorage.setItem("id", id);
    localStorage.setItem("TenSanPham", TenSanPham);
    localStorage.setItem("MoTa", MoTa);
    localStorage.setItem("SoLuong", SoLuong);
    localStorage.setItem("Gia", Gia);
    localStorage.setItem("Hinhanh", Hinhanh);
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
      <td>{item.categoryId}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>

      <td>
        <image
          style={{
            width: "115px",
            height: "108px",
            borderRadius: "13px",
          }}
          src={item.image}
        ></image>
      </td>
      <td>
        <div className="btn-gr">
          <Link to="/UpdateProducts">
            <button
              className="btn-update"
              onClick={() => {
                // if (window.confirm("Update the item?")) {
                setToUpdate(
                  item["id"],
                  item["TenSanPham"],
                  item["MoTa"],
                  item["SoLuong"],
                  item["Gia"],
                  item["Hinhanh"]
                );
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
                // handleDelete(item["id"]);
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
        <input type="text" placeholder="Tìm kiếm sản phẩm" />
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
                bodyData={products}
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
