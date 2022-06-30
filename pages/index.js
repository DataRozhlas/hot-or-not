import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import MainPanel from "../components/MainPanel";
import HistoryPanel from "../components/HistoryPanel";
import styles from "../styles/Home.module.css";

// https://www.median.eu/cs/wp-content/uploads/2022/03/Volby_prezident_2022_02_v05MK.pdf
// https://www.median.eu/cs/wp-content/uploads/2022/04/Volby_prezident_2022_03_v04IC.pdf
// https://www.median.eu/cs/wp-content/uploads/2022/06/Volby_prezident_2022_05_v04IC.pdf

export default function Home(props) {
  // const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   const url = "https://data.irozhlas.cz/hot-or-not-data/prez.json";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //     });
  // }, []);

  useEffect(() => {
    const url =
      "https://datarozhlas.s3.eu-central-1.amazonaws.com/hot-or-not-results/prez-stats.json";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setResults(data);
      });
  }, []);

  const greyStyle =
    history.length < 4 ? `grey${(history.length + 1) * 20}` : "grey100";

  console.log(greyStyle);
  return (
    props.data.length > 0 && (
      <div>
        <Header text="Kdo by byl lepší prezident?"></Header>
        <MainPanel data={props.data} setHistory={setHistory}></MainPanel>
        <HistoryPanel
          data={props.data}
          history={history}
          results={results}
        ></HistoryPanel>
        <div className={styles.buttonContainer}>
          <Link href="/vysledky">
            <button className={`${styles.button} ${styles[greyStyle]}`}>
              Zobrazit žebříček
            </button>
          </Link>
        </div>
      </div>
    )
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
