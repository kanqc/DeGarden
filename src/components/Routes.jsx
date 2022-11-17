import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import Order from "../pages/Order";
import Categories from "../pages/Categories";
import Discount from "../pages/Discount";
import UpdateProducts from "../pages/UpdateProducts";
import UpdateCustomer from "../pages/UpdateCustomer";
import InformationUser from "../pages/InformationUser";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/products" component={Products}></Route>
      <Route path="/updateproducts" component={UpdateProducts} />
      <Route path="/updatecustomer" component={UpdateCustomer} />
      <Route path="/orders" component={Order} />
      <Route path="/categories" component={Categories} />
      <Route path="/discount" component={Discount} />
      <Route path="/informationuser" component={InformationUser} />
    </Switch>
  );
};

export default Routes;
