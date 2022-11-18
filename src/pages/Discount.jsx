import React, { useEffect, useState, memo, useRef } from "react";
import { Link } from "react-router-dom";
import * as Discountservice from "../ApiServices/discountservice";
import axios from "axios";
import Table from "../components/table/Table";

const Discount = () => {
  const [data, setData] = useState([]);
  //Hiển thị discount
  useEffect(() => {
    const fetchData = async () => {
      const queryDiscount = await axios.post(Discountservice.GRAPHQL_API, {
        query: Discountservice.get_Discounts,
      });
      const result = queryDiscount.data.data;
      setData(result.getValidVoucher.data);
      // console.log(result.getAllBonsai.data);
    };

    fetchData();
  }, []);
  const handleDelete = () => {};
  const setToUpdate = () => {};
  const discountTableHead = [
    "STT",
    "ID",
    "Thời gian bắt đầu",
    "Thời gian kế thúc",
    "Giảm tối đa vourcher",
    "Phần trăm giảm",
    "số lượng",
  ];
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item._id}</td>
      <td>{item.start_time}</td>
      <td>{item.end_time}</td>
      <td>{item.max_discount}</td>
      <td>{item.sale_percent}</td>
      <td>{item.quantity}</td>

      <td>
        <div className="btn-gr">
          <Link to="/=">
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

  const renderHead = (item, index) => <th key={index}>{item}</th>;
  return (
    <div>
      <h2 className="page-header">Khuyến Mãi</h2>
      <div className="row">
        <div className="col-12">
          <div className="discount">
            <div className="discount__body">
              <Table
                //limit="10"
                headData={discountTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                //bodyData={data}
                //renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Discount);
