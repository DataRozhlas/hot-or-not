import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import MainPanel from "../components/MainPanel";
import HistoryPanel from "../components/HistoryPanel";
import data from "../components/GetData";

export default function Home() {
  const [history, setHistory] = useState([]);
  return (
    <div className={styles.container}>
      <Header></Header>
      <MainPanel data={data} setHistory={setHistory}></MainPanel>
      <HistoryPanel data={data} history={history}></HistoryPanel>
    </div>
  );
}
