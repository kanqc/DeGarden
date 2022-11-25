import React, { useState, useEffect } from "react";
import "./dialogproduct.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation } from "@apollo/client";
import isEmpty from "validator/lib/isEmpty";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Productservices from "../../ApiServices/productservices";
import { styled } from "@mui/material/styles";
import axios from "axios";
// import { TYPE } from "react-toastify/dist/utils";

const StyledDialog = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    max-width: 1080px;
  }
`;
export default function FormDialogProduct({ open, handleClose }) {
  const [message, setMessage] = useState("NULL");
  const [productDetail, setProductDetail] = useState({});
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    quantity: "",
    price: "",
  });
  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  // const handleUpImg = (e) => {
  //   setImage(e.target.files[0]);
  // };

  // thêm sản phẩm
  useEffect(() => {
    const data = async () => {
      const queryRes = await axios.post(Productservices.GRAPHQL_API, {
        query: Productservices.new_Products,
        variables: {
          data: {
            name: product.name,
            description: product.description,
            image: product.image,
            quantity: product.quantity,
            price: product.price,
          },
        },
      });
      const res = queryRes.data.data;
      setMessage(res);
      setProduct(res.data);
    };
    data();
  }, [product]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(productDetail);
    document.documentElement.scrollTop = 0;
    window.localStorage.setItem(
      "PRODUCT-DETAIL",
      JSON.stringify(productDetail)
    );
  };

  return (
    <div>
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="title " id="alert-dialog-title">
          {"Thêm Sản Phẩm"}
        </DialogTitle>
        <DialogContent style={{ width: "100%" }}>
          <DialogContentText id="alert-dialog-description">
            <div className="form-submit">
              <form onSubmit={sumbitHandler}>
                <fieldset>
                  <label>Tên Sản Phẩm: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={onChange}
                    value={product.name}
                  ></input>
                  <label>Mô Tả:</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={onChange}
                    value={product.description}
                  ></input>
                  <label>Số Lượng:</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    onChange={onChange}
                    value={product.quantity}
                  ></input>
                  <label>Giá: </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    onChange={onChange}
                    value={product.price}
                  ></input>
                  <label>Hình Ảnh: </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={onChange}
                    value={product.image}
                  ></input>
                  <input type="submit" value="Hủy" class="btn-c"></input>
                  <input type="submit" value="Lưu" class="btn-s"></input>
                </fieldset>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
      </StyledDialog>
    </div>
  );
}
