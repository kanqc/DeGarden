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
    console.log("nhấn chọn nè", product);
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
            <div className="form-textfield">
              <form onSubmit={sumbitHandler}>
                <div class="input-group mb-3">
                  <div className="name-input">Tên sản phẩm</div>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Nhập tên sản phẩm..."
                    onChange={onChange}
                    value={product.name}
                  />
                </div>
                <div class="input-group mb-3">
                  <div className="name-input">Mô tả</div>
                  <input
                    type="text"
                    name="description"
                    class="form-control"
                    placeholder="Nhập mô tả..."
                    onChange={onChange}
                    value={product.description}
                  />
                </div>
                <div class="input-group mb-3">
                  <div className="name-input">Số lượng</div>
                  <input
                    name="quantity"
                    type="text"
                    class="form-control"
                    placeholder="Nhập số lượng..."
                    onChange={onChange}
                    value={product.quantity}
                  />
                </div>
                <div class="input-group mb-3">
                  <div className="name-input">Giá</div>
                  <input
                    type="text"
                    name="price"
                    class="form-control"
                    placeholder="Nhập giá..."
                    onChange={onChange}
                    value={product.price}
                  />
                </div>
                <div class="input-group mb-3">
                  <div className="name-input">Hình ảnh</div>
                  <input
                    name="image"
                    type="file"
                    class="form-control"
                    // onChange={onChange}
                    // value={product.image}
                  />
                </div>
                <div className="btn-group">
                  <DialogActions>
                    <button className="btn-cancel" onClick={handleClose}>
                      Hủy Bỏ
                    </button>
                    <button
                      className="btn-save"
                      type="submit"
                      onClick={() => {
                        sumbitHandler();
                      }}
                      variant="contained"
                      color="primary"
                      autoFocus
                    >
                      Lưu
                    </button>
                  </DialogActions>
                </div>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
      </StyledDialog>
    </div>
  );
}
