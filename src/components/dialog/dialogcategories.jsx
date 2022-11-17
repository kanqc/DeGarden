import * as React from "react";
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
// import { TYPE } from "react-toastify/dist/utils";

const StyledDialog = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    max-width: 1080px;
  }
`;
export default function FormDialogCategories({ open, handleClose }) {
  const [id, setid] = React.useState("");
  const [image, setImage] = React.useState("");
  const [file, setFile] = React.useState([]);
  const [nameProduct, setnameProduct] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [validationMsg, setValidationMsg] = React.useState("");

  //tạo sản phẩm mới
  // const onSubmit = async (e) => {
  //   const createProduct = await productservices.newProducts(
  //     nameProduct,
  //     description,
  //     amount,
  //     price,
  //     file
  //   );
  //   handleClose(true);
  //   toast.success("Thêm Thành Công!");
  // };

  // const onSubmitValidtion = async (e) => {
  //   const isValid = validateAll();
  //   if (isValid) {
  //     return;
  //   } else {
  //     const createProduct = await productservices.newProducts(
  //       nameProduct,
  //       description,
  //       amount,
  //       price
  //     );
  //     // console.log(formdata);
  //     console.log("true");
  //     handleClose(true);
  //     toast.success("Thêm Thành Công!");
  //   }
  // };

  return (
    <div>
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Thêm danh mục sản phẩm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="form-textfield">
              <div className="left-form">
                <div className="item item-1">
                  <TextField
                    type="text"
                    label="ID Danh Mục"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    required
                  />
                </div>
                <div className="item item-2">
                  <TextField
                    type="text"
                    label="Mã Danh Mục"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    required
                  />
                </div>
                <div className="item item-3">
                  <TextField
                    label="Tên Danh Mục"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />{" "}
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
              //onSubmit();
              //onSubmitValidtion();
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
