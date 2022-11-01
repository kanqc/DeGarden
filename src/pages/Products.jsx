import React from "react";
import Table from "../components/table/Table";
const ProductsTableHead = ["Tên Sản Phẩm", "Mô Tả", "Số Lượng ", "Giá"];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Products = () => {
  return (
    <div>
      <h2 className="page-header">Sản Phẩm</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                // limit="5"
                headData={ProductsTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                // bodyData={customerList}
                // renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
