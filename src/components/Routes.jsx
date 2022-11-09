import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import Order from "../pages/Order";
import Categories from "../pages/Categories";
import Discount from "../pages/Discount";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/products" component={Products} />
      <Route path="/orders" component={Order} />
      <Route path="/categories" component={Categories} />
      <Route path="/discount" component={Discount} />
    </Switch>
  );
};

export default Routes;
