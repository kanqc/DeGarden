import React, { useEffect, useState } from "react";

import "./topnav.css";
// import * as Customerservices from "../ApiServices/customerservices";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import ThemeMenu from "../thememenu/ThemeMenu";

import user_image from "../../assets/images/user.png";

import user_menu from "../../assets/Data/user_menus.json";
import axios from "axios";

const Topnav = () => {
  const [data, setData] = useState();
  const curr_user = {
    display_name: "Admin",
    image: user_image,
  };

  const renderUserMenu = (item, index) => (
    <Link to="/InformationUser" key={index}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  );

  const renderUserToggle = (user) => (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">{user.display_name}</div>
    </div>
  );

  return (
    <div className="topnav">
      <div className="ttopnav__search"></div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>

        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
