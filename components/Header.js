import React from "react";
import styles from "../styles/Header.module.css";

const Header = (props) => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <h1>Kdo by byl lepší prezident?</h1>
    </div>
  );
};

export default Header;
