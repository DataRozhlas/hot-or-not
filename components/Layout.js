import React from "react";
//import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      {/* <Header></Header> */}
      {props.children}
    </div>
  );
};

export default Layout;
