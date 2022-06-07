import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ResultsPanel from "../components/ResultsPanel";
import Link from "next/link";

export default function Vysledky() {
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
    <>
      <Header text="Nejúspěšnější kandidáti"></Header>
      <ResultsPanel results={results}></ResultsPanel>
      <div className={styles.buttonContainer}>
        <Link href="/">
          <button className={styles.button}>Zpět</button>
        </Link>
      </div>
    </>
  );
}
