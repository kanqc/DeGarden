import * as React from "react";
import { useEffect } from "react";
import "./dialogproduct.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import isEmpty from "validator/lib/isEmpty";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as productservices from "../../ApiServices/productservices";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
// import { TYPE } from "react-toastify/dist/utils";

const StyledDialog = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    max-width: 1080px;
  }
`;
export default function FormDialogProduct({ open, handleClose }) {
  const [id, setid] = React.useState("");

  const [image, setImage] = React.useState("");
  const [nameProduct, setnameProduct] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");

  const data = {
    id,
    image,
    nameProduct,
    amount,
    price,
    description,
  };

  const handleUpImg = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = (e) => {
    const formData = new FormData();
    formData.set("file", image, "hello");
    axios.post("", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thêm Sản Phẩm"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="form-textfield">
              <div className="left-form">
                <div className="item item-2">
                  <TextField
                    type="text"
                    label="Tên Sản Phẩm"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    name="nameProduct"
                    onChange={(e) => setnameProduct(e.target.value)}
                    required
                  />
                </div>
                <div className="item item-3">
                  <TextField
                    label="Mô Tả"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    name="description"
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
                    onChange={(e) => setAmount(e.target.value)}
                  />{" "}
                </div>

                <div className="item item-5">
                  <TextField
                    label="Gía"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
                  />{" "}
                </div>
                <div className="item item-6">
                  <input fullWidth type="file" onChange={handleUpImg}></input>
                </div>
              </div>
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
