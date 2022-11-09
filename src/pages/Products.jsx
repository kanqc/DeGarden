import React, { useEffect, useState, memo } from "react";
import Table from "../components/table/Table";
import FormDialogProduct from "../components/dialog/dialogproduct";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as apiProducts from "../ApiServices/apiproducts";

const ProductsTableHead = [
  "STT",
  "Tên Sản Phẩm",
  "Mô Tả",
  "Số Lượng",
  "Giá",
  "Chuc nang",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{item["TenSanPham"]}</td>
    <td>{item["MoTa"]}</td>
    <td>{item["SoLuong"]}</td>
    <td>{item["Gia"]}</td>
    <td>
      <div className="btn-gr">
        <button className="btn-lock">Khóa</button>
        <button className="btn-unlock">Mở Khóa</button>
      </div>
    </td>
  </tr>
);

function Products() {
  const [Products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchApi = async () => {
      const result = await apiProducts.getProducts();
      setProducts(result);
    };
    fetchApi();
  }, []);
  return (
    <div>
      <h2 className="page-header">Sản Phẩm</h2>
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
                limit="5"
                headData={ProductsTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={Products}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
          <FormDialogProduct open={open} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
}

export default memo(Products);
