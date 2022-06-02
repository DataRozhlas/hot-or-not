import React from "react";
import styles from "../styles/Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.container}>
      <h1>Kdo by byl lepší prezident?</h1>
    </header>
  );
};

export default Header;
