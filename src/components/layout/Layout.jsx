import React from "react";
import "./style.css";

function Layout(props) {
  console.log(props);
  return <div className="layout">{props.children}</div>;
}
export default Layout;
