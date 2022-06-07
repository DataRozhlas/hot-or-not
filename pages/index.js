import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import MainPanel from "../components/MainPanel";
import HistoryPanel from "../components/HistoryPanel";
import data from "../components/GetData";
import styles from "../styles/Home.module.css";

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
      <Header text="Kdo by byl lepší prezident?"></Header>
      <MainPanel data={data} setHistory={setHistory}></MainPanel>
      <HistoryPanel
        data={data}
        history={history}
        results={results}
      ></HistoryPanel>
      {history.length > 1 && (
        <div className={styles.buttonContainer}>
          <Link href="/vysledky">
            <button className={styles.button}>Zobrazit žebříček</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://data.irozhlas.cz/hot-or-not-data/prez.json"
  ).then((res) => res.json());
  return {
    props: {
      data: data,
    },
  };
}
