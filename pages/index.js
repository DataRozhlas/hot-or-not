import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import MainPanel from "../components/MainPanel";
import HistoryPanel from "../components/HistoryPanel";
import RelatedArticles from "../components/RelatedArticles";
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

  return (
    props.data.length > 0 && (
      <div className={styles.container}>
        <Header text="Kdo by podle vás byl lepší prezident?"></Header>
        <h3 className={styles.subtitle}>
          {history.length > 0
            ? "Vyberte z další dvojice"
            : "Vyberte si jednoho z kandidátů"}
        </h3>
        <MainPanel
          data={props.data}
          history={history}
          setHistory={setHistory}
        ></MainPanel>
        <HistoryPanel
          data={props.data}
          history={history}
          results={results}
        ></HistoryPanel>
        <div className={styles.buttonContainer}>
          <Link href="/vysledky">
            <button className={`${styles.button} ${styles[greyStyle]}`}>
              Zobrazit výsledky hlasování<br></br>
              <span className={styles.buttonSmall}>čtenářů iROZHLAS.cz</span>
            </button>
          </Link>
        </div>
        <div className={styles.text}>
          <h3>Výběr kandidátů</h3>
          <p>
            Do aplikace jsme v první fázi zařadili kandidáty, kteří alespoň v
            jednom ze tří volebních modelů agentury Median publikovaných v{" "}
            <a
              href="https://www.median.eu/cs/wp-content/uploads/2022/03/Volby_prezident_2022_02_v05MK.pdf"
              target="_blank"
              rel="noreferrer"
            >
              březnu
            </a>
            ,{" "}
            <a
              href="https://www.median.eu/cs/wp-content/uploads/2022/04/Volby_prezident_2022_03_v04IC.pdf"
              target="_blank"
              rel="noreferrer"
            >
              dubnu
            </a>{" "}
            a{" "}
            <a
              href="https://www.median.eu/cs/wp-content/uploads/2022/06/Volby_prezident_2022_05_v04IC.pdf"
              target="_blank"
              rel="noreferrer"
            >
              červnu
            </a>{" "}
            dosáhli na 5 % hlasů a zároveň kandidaturu veřejně neodmítli. Další
            uchazeče budeme podle stejných kritérií doplňovat až do potvrzení
            oficiálních kandidátek.
          </p>
          <p>
            První kolo prezidentských voleb se koná 13. a 14. ledna 2023. Pokud
            v něm nikdo nezíská 50 % hlasů, ze dvou nejúspěšnějších se bude
            definitivně vybírat 27. a 28. ledna. Volební období Miloše Zemana
            skončí 8. března.
          </p>
        </div>
        <RelatedArticles
          tag={426226}
          name={"prezidentské volbě"}
        ></RelatedArticles>
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
