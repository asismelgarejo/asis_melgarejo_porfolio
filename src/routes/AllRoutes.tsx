import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { homeRoutes } from "./nav-routes";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "../views/Home";

const AllRoutes = () => {
  // const moduleHome = homeRoutes.map(({ path, name, Component }, key) => (
  //   <PrivateRoute
  //     key={`${key}-${name}`}
  //     path={path}
  //     exact
  //     component={({ location }: any) => {
  //       return <Component />;
  //     }}
  //   />
  // ));
  return (
    <div>
      {/* <Switch>{moduleHome}</Switch> */}
      <Home/>
    </div>
  );
};

export default AllRoutes;
