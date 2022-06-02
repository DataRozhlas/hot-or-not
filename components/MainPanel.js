import React from "react";
import Item from "./Item";
import styles from "../styles/MainPanel.module.css";

const MainPanel = (props) => {
  return (
    <main className={styles.container}>
      <Item></Item>
      <Item></Item>
    </main>
  );
};

export default MainPanel;
