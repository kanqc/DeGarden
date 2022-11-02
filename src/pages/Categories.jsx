import React from "react";
import "./Categories.css";
import Table from "../components/table/Table";
import CategorisList from "../assets/JsonData/categories-list.json";

const CategoryTableHead = ["STT", "Mã Danh Mục ", "Tên Danh Mục "];
const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.id_category}</td>
    <td>{item.name_category}</td>
  </tr>
);
const Categories = () => {
  return (
    <div>
      <h2 className="page-header">Danh Mục Sản Phẩm</h2>
      <div className="row">
        <div className="col-12">
          <div className="product">
            <div className="product__body">
              <Table
                limit="5"
                headData={CategoryTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={CategorisList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
