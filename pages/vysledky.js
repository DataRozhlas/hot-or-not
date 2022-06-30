import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ResultsPanel from "../components/ResultsPanel";
import Link from "next/link";

export default function Vysledky(props) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const url =
      "https://datarozhlas.s3.eu-central-1.amazonaws.com/hot-or-not-results/prez-stats.json";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setResults(data);
      });
  }, []);

  return (
    <>
      <Header text="Nejúspěšnější kandidáti"></Header>
      <ResultsPanel
        results={results}
        dativ={false}
        data={props.data}
      ></ResultsPanel>
      <div className={styles.buttonContainer}>
        <Link href="/">
          <button className={styles.button}>Zpět</button>
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://data.irozhlas.cz/hot-or-not-data/prez.json"
  ).then(res => res.json());
  return {
    props: {
      data: data.filter(item => item.use),
    },
  };
}
