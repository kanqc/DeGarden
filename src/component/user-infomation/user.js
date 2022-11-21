import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import logo from "../../img/meo.jpg";
import Grid from "@mui/material/Grid"; // Grid version 1
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./user.css";
import { event } from "jquery";

export default function User() {
  const [disabled, setDisabled] = useState(true);
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueAddress, setValueAddress] = useState("");
  const [valuePhone, setValuePhone] = useState("");

  const handleChangleTextField = () => {
    setDisabled(false);
  };

  // handleChangleTextField = () => {
  //   console.log("Your button was clicked and is now disabled");
  //   // eslint-disable-next-line no-undef
  //   setDisabled(false);
  // };

  // const [selectedFile, setSelectedFile] = useState();

  // const [preview, setPreview] = useState();
  // useEffect(() => {
  //   if (!selectedFile) {
  //     setPreview(undefined);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile);
  //   setPreview(objectUrl);

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);

  // const onSelectFile = (e) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     setSelectedFile(undefined);
  //     return;
  //   }

  //   // I've kept this example simple by using the first image instead of multiple
  //   setSelectedFile(e.target.files[0]);
  const [selectedImages, setSelectedImages] = useState([]);
  function onSelectFile(event) {
    const selectedFiles = event.target.files;
    const selectFileArray = Array.from(selectedFiles);

    const imageArray = selectFileArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imageArray);
  }

  const [show, setShow] = useState(false);
  // const toggle = () => {
  //   setShow(!show);
  // };
  const handleChangeName = (e) => {
    setValueName(e.target.value);
    setShow(true);
    var a = ReactDOM.findDOMNode(document.getElementById("submit"));
    a.style.backgroundColor = "red";
  };
  const handleChangeEmail = (e) => {
    setValueEmail(e.target.value);
    setShow(true);
    var a = ReactDOM.findDOMNode(document.getElementById("submit"));
    a.style.backgroundColor = "red";
  };
  const handleChangeAddress = (e) => {
    setValueAddress(e.target.value);
    setShow(true);
    var a = ReactDOM.findDOMNode(document.getElementById("submit"));
    a.style.backgroundColor = "red";
  };
  const handleChangePhone = (e) => {
    setValuePhone(e.target.value);
    setShow(true);
    var a = ReactDOM.findDOMNode(document.getElementById("submit"));
    a.style.backgroundColor = "red";
  };
  const handleSubmit = () => {
    handleChangleTextField();
  };
  const [render, setRender] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRender(event.target.value);
  };
  return (
    <div className="form-user">
      <div className="user-img">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return <img src={image}></img>;
          })}
      </div>

      <div className="info-user">
        <div className="name-user">
          <h2 className="name">Võ Anh Khoa</h2>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs>
          <div className="input-left-top">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                disabled={disabled}
                className="input"
                id="outlined-disabled"
                label="Họ Tên "
                type="Name"
                value={valueName}
                onChange={handleChangeName}
              />
            </FormControl>
          </div>

          <div className="input-left-mid">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                disabled={disabled}
                className="input"
                id="outlined-email-input"
                label="Email "
                type="Email"
                value={valueEmail}
                onChange={handleChangeEmail}
              />
            </FormControl>
          </div>
          <div className="input-left-bottom">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel id="demo-simple-select-label">Giới tính</InputLabel>
              <Select
                disabled={disabled}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={render}
                onChange={handleChange}
              >
                <MenuItem value="Nam">Nam</MenuItem>
                <MenuItem value="Nu">Nữ</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>

        <Grid item xs>
          <div className="input-img">
            <label>
              Thêm ảnh
              <br />
              <input type="file" onChange={onSelectFile} />
            </label>
          </div>
          <div className="input-right-top">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                disabled={disabled}
                className="input"
                id="outlined-address-input"
                label="Địa chỉ "
                type="Address"
                value={valueAddress}
                onChange={handleChangeAddress}
              />
            </FormControl>
          </div>
          <div className="input-right-bottom">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                disabled={disabled}
                className="input"
                id="outlined-phone-input"
                width="100px"
                label="Số điện thoại "
                type="Address"
                value={valuePhone}
                onChange={handleChangePhone}
              />
            </FormControl>
          </div>
        </Grid>
      </Grid>
      <Stack spacing={2} direction="row">
        <div className="btn-group">
          <div className="btn-return">
            <Button variant="outlined">Trở về</Button>
          </div>
          <div className="btn-change">
            <Button onClick={handleSubmit} variant="contained" id="submit">
              {!show ? "Thay đổi" : "Lưu"}
            </Button>
          </div>
        </div>
      </Stack>
    </div>
  );
}
