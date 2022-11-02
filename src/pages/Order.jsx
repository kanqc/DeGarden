import React from "react";
import Table from "../components/table/Table";
const OrderTableHead = [
  "STT",
  "Mã Sản phẩm",
  "Tên Khách Hàng ",
  "Số Lượng ",
  "Khuyến Mãi",
  "Giá",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Order = () => {
  return (
    <div>
      <h2 className="page-header">Đơn Hàng</h2>
      <div className="row">
        <div className="col-12">
          <div className="order">
            <div className="order__body">
              <Table
                // limit="5"
                headData={OrderTableHead}
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

export default Order;
