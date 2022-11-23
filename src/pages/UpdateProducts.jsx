import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as productservices from "../ApiServices/productservices";
import "../pages/csspage/UpdateProducts.css";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import axios from "axios";

function Update({ open, handleClose }) {
  const [imgURL, setimgURL] = useState("");
  const [product, setproduct] = useState();
  const [id, setid] = useState(0);
  const [nameProduct, setnameProduct] = React.useState("");
  const [image, setImage] = useState([]);
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");

  console.log(image);

  // lấy từ các key trong localstorage
  useEffect(() => {
    const detailProduct = JSON.parse(localStorage.getItem("detailProduct"));
    //console.log("get product", detailProduct);
    setid(detailProduct._id);
    setnameProduct(detailProduct.name);
    setDescription(detailProduct.description);
    setQuantity(detailProduct.quantity);
    setPrice(detailProduct.price);
    setImage(detailProduct.image);

    // setFile(localStorage.getItem(""));
  }, []);

  // Sửa sản phẩm
  const handleUploadFile = async (e) => {
    setImage(e.target.value);
  };

  const handleUpdate = (e) => {
    // setImg(e.target.files[0]);
    // const avatar = e.target.files[0];
    // const review = URL.createObjectURL(avatar);
    // setimgURL(review);
  };
  return (
    <>
      <div className="form-update">
        <h2>Update Product</h2>
        <div className="left-form">
          <div className="item item-1">
            <TextField
              label="ID"
              variant="outlined"
              margin="dense"
              fullWidth
              name="id"
              value={id}
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div className="item item-2">
            <TextField
              label="Tên Sản Phẩm"
              variant="outlined"
              margin="dense"
              fullWidth
              name="nameProduct"
              value={nameProduct}
              onChange={(e) => setnameProduct(e.target.value)}
            />
          </div>
          <div className="item item-3">
            <TextField
              label="Mô Tả"
              variant="outlined"
              margin="dense"
              fullWidth
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />{" "}
          </div>
          <div className="item item-4">
            <TextField
              label="Số Lượng"
              variant="outlined"
              margin="dense"
              fullWidth
              name="amount"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />{" "}
          </div>
          <div className="item item-5">
            <TextField
              label="Gía"
              variant="outlined"
              margin="dense"
              fullWidth
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />{" "}
          </div>
          <div className="item item-6">
            <div
              style={{
                width: "550px",
                height: "450px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={image}
                alt="img"
              />
            </div>
            <input
              // src={}
              fullWidth
              type="file"
              id="image"
              accept=".png, .jpg, .jpeg"
              onChange={(e) =>
                // console.log("change");
                // console.log(e.target.value);
                handleUploadFile()
              }
            />{" "}
          </div>

          <div className="btn-gr">
            <Link to="/products">
              <button
                variant="contained"
                color="primary"
                className="btn-cancel"
              >
                Hủy Bỏ
              </button>
              <button
                className="btn-save"
                variant="contained"
                color="primary"
                autoFocus
                onClick={handleUpdate}
              >
                Lưu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
