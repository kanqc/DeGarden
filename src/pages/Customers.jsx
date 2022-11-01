import React from "react";
import "./Customers.css";
import Table from "../components/table/Table";

import customerList from "../assets/JsonData/customers-list.json";

const customerTableHead = [
  "STT",
  "ID",
  "Họ Tên",
  "Email",
  "Số điện thoại",
  "Địa chỉ",
  "Mật Khẩu",
  "Quyền",
  "Chức Năng",
];
// const stt = 1;
// while (stt = 1) {
//   stt++;
// }

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
    <td>
      <div className="btn-gr">
        <button className="btn-lock">Khóa</button>
        <button className="btn-unlock">Mở Khóa</button>
      </div>
    </td>
  </tr>
);

const Customers = () => {
  return (
    <div>
      <h2 className="page-header">Người Dùng</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="5"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
