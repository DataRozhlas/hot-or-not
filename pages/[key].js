import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import ResultsPanel from "../components/ResultsPanel";
import styles from "../styles/Home.module.css";

const imgLoader = ({ src, width, quality }) => {
  return `https://data.irozhlas.cz/hot-or-not/out${src}`;
};

const DetailsPage = () => {
  useEffect(() => {
    const url = "https://data.irozhlas.cz/hot-or-not-results/prez-stats.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  }, []);

  const router = useRouter();
  const key = router.query.key;
  const candidateDetails = props.data.filter((i) => i.key === key)[0];
  let candidateResults;

  const [results, setResults] = useState([]);

  if (results.length > 0) {
    candidateResults = results.filter((i) => i.id === candidateDetails.id)[0];
  }

  return (
    candidateDetails &&
    results.length > 0 && (
      <div>
        <Header text={candidateDetails.name}></Header>
        <h3 className={styles.subtitle}>{`${Math.round(
          (candidateResults.w / (candidateResults.w + candidateResults.l)) * 100
        )} % vítězství z ${candidateResults.w + candidateResults.l} duelů`}</h3>
        <div className={styles.candidateProfileContainer}>
          <Image
            loader={imgLoader}
            className={styles.image}
            src={`/img/${candidateDetails.key}.jpg`}
            alt={candidateDetails.name}
            width={300}
            height={300}
          ></Image>
          <div className={styles.candidateInfo}>
            <ul>
              <li>povolání</li>
              <li>věk</li>
              <li>bydliště</li>
              <li>členství v politických stranách</li>
              <li>odkaz na články iROZHLASu</li>
              <li>a jiné info</li>
            </ul>
          </div>
        </div>
        <div className={styles.resultsContainer}>
          <h3 className={styles.subtitle}>
            {candidateDetails.dativ} se nejvíc daří proti
          </h3>
          <ResultsPanel
            results={candidateResults.c}
            dativ={true}
            data={props.data}
          ></ResultsPanel>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/vysledky">
            <button className={styles.button}>Zpět</button>
          </Link>
        </div>
      </div>
    )
  );
};

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

export default DetailsPage;
