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
  const [inputField, setInputField] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });
  const inputHandler = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  // const [createProduct, { error }] = useMutation(Productservices.new_Products);

  // const handleUpImg = (e) => {
  //   setImage(e.target.files[0]);
  // };

  // thêm sản phẩm
  const onSubmit = (e) => {
    // const formData = new FormData();
    // formData.set("file", image, "hello");
    // axios.post("", formData, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });
    // createProduct({
    //   variables: inputField,
    // });
    console.log(inputField);
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
              <form>
                <div class="input-group mb-3">
                  <div className="name-input">Tên sản phẩm</div>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Nhập tên sản phẩm..."
                    onChange={inputHandler}
                    value={inputField.name}
                  />
                </div>
                <div class="input-group mb-3">
                  <div className="name-input">Mô tả</div>
                  <input
                    type="text"
                    name="description"
                    class="form-control"
                    placeholder="Nhập mô tả..."
                    onChange={inputHandler}
                    value={inputField.description}
                  />
                </div>
                <div class="input-group mb-3">
                  <div className="name-input">Số lượng</div>
                  <input
                    name="quantity"
                    type="text"
                    class="form-control"
                    placeholder="Nhập số lượng..."
                    onChange={inputHandler}
                    value={inputField.quantity}
                  />
                </div>
                <div class="input-group mb-3">
                  <div className="name-input">Gía</div>
                  <input
                    type="text"
                    name="price"
                    class="form-control"
                    placeholder="Nhập giá..."
                    onChange={inputHandler}
                    value={inputField.price}
                  />
                </div>
                <div class="input-group mb-3">
                  <div className="name-input">Hình ảnh</div>
                  <input type="file" class="form-control" />
                </div>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy Bỏ</Button>
          <Button
            type="submit"
            onClick={() => {
              onSubmit();
              //   onSubmitValidtion();
            }}
            variant="contained"
            color="primary"
            autoFocus
          >
            Lưu
          </Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
