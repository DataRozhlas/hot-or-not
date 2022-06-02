import React from "react";
import styles from "../styles/Item.module.css";

const Item = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Andrej Babiš</h2>
    </div>
  );
};

export default Item;
