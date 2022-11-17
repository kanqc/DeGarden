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
export default function FormDialogProduct({ open, handleClose }) {
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

  const onChangeId = (e) => {
    const value = e.target.value;
    setid(value);
  };
  const validateAll = () => {
    const msg = {};
    if (isEmpty(nameProduct)) {
      msg.nameProduct = "Vui lòng nhập tên sản phẩm";

      setValidationMsg(msg);
      return true;
    }
  };

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
                  <p className="text-error">{validationMsg.nameProduct}</p>
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
                  <TextField
                    fullWidth
                    label="Hình ảnh"
                    type="file"
                    id="image"
                    accept=".png, .jpg, .jpeg"
                    name="upload_file"
                    onChange={(e) => setFile(e.target.value)}
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
