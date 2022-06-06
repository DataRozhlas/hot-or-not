import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import MainPanel from "../components/MainPanel";
import HistoryPanel from "../components/HistoryPanel";
import data from "../components/GetData";

export default function Home() {
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const url = "https://data.irozhlas.cz/hot-or-not-results/prez-stats.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  }, []);

  return (
    <div>
      <Header></Header>
      <MainPanel data={data} setHistory={setHistory}></MainPanel>
      <HistoryPanel
        data={data}
        history={history}
        results={results}
      ></HistoryPanel>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Zobrazit kompletní žebříček</button>
      </div>
    </div>
  );
}
