import React from "react";
//import Header from "./Header";
import styles from "../styles/Layout.module.css";
import NavBar from "./NavBar";

const Layout = props => {
  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      {/* <Header></Header> */}
      {props.children}
    </div>
  );
};

export default Layout;
