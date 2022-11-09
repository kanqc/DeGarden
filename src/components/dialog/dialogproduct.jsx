import * as React from "react";
import "./dialog.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const StyledDialog = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    max-width: 1080px;
  }
`;
export default function FormDialogProduct({ open, handleClose }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thêm Khách Hàng"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="form-textfield">
              <form>
                <div className="left-form">
                  <div className="item item-1">
                    <TextField
                      label="Tên Sản Phẩm"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      name="txtName"
                      // onChange={this.onChange}
                    />
                  </div>
                  <div className="item item-2">
                    <TextField
                      label="Mô Tả"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      name="txtDescription"
                    />{" "}
                  </div>
                  <div className="item item-3">
                    <TextField
                      label="Số Lượng"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      name="txtAmount"
                    />{" "}
                  </div>

                  <div className="item item-4">
                    <TextField
                      label="Giá"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      name="txtPrice"
                    />{" "}
                  </div>
                </div>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy Bỏ</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            autoFocus
          >
            Lưu
          </Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
