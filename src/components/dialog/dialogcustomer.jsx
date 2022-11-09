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
export default function FormDialog({ open, handleClose }) {
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
                      label="Họ Tên"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
                  </div>
                  <div className="item item-2">
                    <TextField
                      label="Email"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />{" "}
                  </div>
                  <div className="item item-3">
                    <TextField
                      label="Số điện thoại"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />{" "}
                  </div>

                  <div className="item item-4">
                    <TextField
                      label="Địa chỉ"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />{" "}
                  </div>
                </div>
                <div className="right-form">
                  <div className="item item-5">
                    <TextField
                      label="Mật Khẩu"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />{" "}
                  </div>
                  <div className="item item-6">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Giới Tính"
                        onChange={handleChange}
                      >
                        <MenuItem value={0}>Nam</MenuItem>
                        <MenuItem value={1}>Nữ</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="item item-7">
                    <TextField
                      label="Quyền"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />{" "}
                  </div>
                  <div className="item item-8">
                    {" "}
                    <TextField
                      label="Chức Năng"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
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
