// mã vourcher
// mô tả
// thời gian bắt đầu
// thời gian kết thúc
// số lượng
// Mốc cần đạt
// giảm tối đa
// phần trăm giảm
// điểm sử dụng
import React from "react";
import Table from "../components/table/Table";

const discountTableHead = [
  "mã vourcher",
  "mô tả",
  "thời gian bắt đầu",
  "thời gian kết thúc",
  "số lượng",
  "Mốc cần đạt",
  "giảm tối đa",
  "phần trăm giảm",
  "điểm sử dụng",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const discount = () => {
  return (
    <div>
      <h2 className="page-header">Người Dùng</h2>
      <div className="row">
        <div className="col-12">
          <div className="discount">
            <div className="discount__body">
              <Table
                // limit="5"
                headData={discountTableHead}
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

export default discount;
