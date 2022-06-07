import React from "react";
import styles from "../styles/Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.small}>{props.text}</h1>
    </header>
  );
};

export default Header;
