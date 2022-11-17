import React from "react";
import { Link } from "react-router-dom";
import "../pages/csspage/Categories.css";
import Table from "../components/table/Table";
import CategorisList from "../assets/Data/categories-list.json";
import FormDialogCategories from "../components/dialog/dialogcategories";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Categories = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const CategoryTableHead = [
    "STT",
    "Mã Danh Mục ",
    "Tên Danh Mục ",
    "Chức Năng",
  ];
  const setToUpdate = () => {};
  const handleDelete = () => {};
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.id_category}</td>
      <td>{item.name_category}</td>
      <td>
        <div className="btn-gr">
          <Link to="">
            <button onClick={() => setToUpdate()} className="btn-update">
              Sửa{" "}
            </button>
          </Link>

          <button onClick={() => handleDelete()} className="btn-delete">
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
  return (
    <div>
      <h2 className="page-header">Danh Mục Sản Phẩm</h2>
      <div className="topnav__search">
        <input type="text" placeholder="Tìm kiếm danh mục...." />
        <i className="bx bx-search"></i>
      </div>
      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          +Thêm
        </Button>
      </Grid>
      <div className="row">
        <div className="col-12">
          <div className="category">
            <div className="category__body">
              <Table
                limit="5"
                headData={CategoryTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={CategorisList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
          <FormDialogCategories open={open} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
