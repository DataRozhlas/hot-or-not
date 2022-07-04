import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import RelatedArticles from "../components/RelatedArticles";
import ResultsPanel from "../components/ResultsPanel";
import styles from "../styles/Home.module.css";

const imgLoader = ({ src, width, quality }) => {
  return `https://data.irozhlas.cz/hrad-or-not${src}-300.jpg`;
};

const DetailsPage = props => {
  useEffect(() => {
    const url =
      "https://datarozhlas.s3.eu-central-1.amazonaws.com/hot-or-not-results/prez-stats.json";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setResults(data);
      });
  }, []);

  const router = useRouter();
  const key = router.query.key;
  const candidateDetails = props.data.find(i => i.key === key);
  let candidateResults;

  const [results, setResults] = useState([]);

  if (results.length > 0) {
    candidateResults = results.find(i => i.id === candidateDetails.id);
  }

  return (
    <>
      <Head>
        <title>
          {`Průběžné výsledky ${candidateDetails.genitiv} v simulátoru druhého kola prezidentských voleb`}
        </title>
        <meta
          key="share-image"
          property="og:image"
          content={`https://data.irozhlas.cz/hrad-or-not/img/${candidateDetails.key}-300.jpg`}
        />
        <meta
          property="og:title"
          content={`Průběžné výsledky ${candidateDetails.genitiv} v simulátoru druhého kola prezidentských voleb`}
        />
        <meta
          property="og:url"
          content={`https://data.irozhlas.cz/hrad-or-not/${candidateDetails.key}/`}
        />
        <meta
          property="og:description"
          content={
            "Podívejte se, jak by podle naší ankety obstál/a ve druhém kole proti jiným kandidátům."
          }
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={`Průběžné výsledky ${candidateDetails.genitiv} v simulátoru druhého kola prezidentských voleb`}
        />

        <meta name="twitter:site" content="@datarozhlas" />
        <meta name="twitter:creator" content="@tocit" />
        <meta
          name="twitter:image"
          content={`https://data.irozhlas.cz/hrad-or-not/img/${candidateDetails.key}-300.jpg`}
        />
      </Head>
      {candidateDetails && results.length > 0 && (
        <div className={styles.container}>
          <Header text={candidateDetails.name}></Header>
          <h3 className={styles.subtitleDetail}>{`${Math.round(
            (candidateResults.w / (candidateResults.w + candidateResults.l)) *
              100
          )} % vítězství z ${(
            candidateResults.w + candidateResults.l
          ).toLocaleString("cs-CZ")} duelů`}</h3>
          <div className={styles.candidateProfileContainer}>
            <Image
              loader={imgLoader}
              className={styles.image}
              src={`/img/${candidateDetails.key}`}
              alt={candidateDetails.name}
              width={300}
              height={300}
            ></Image>
            <div className={styles.candidateInfo}>
              <ul>
                <h5 className={styles.bioSubtitle}>Základní údaje</h5>

                <li>{candidateDetails.povolani}</li>
                <li>
                  {Math.floor(
                    (Date.now() - Date.parse(candidateDetails.dob)) /
                      31557600000
                  )}{" "}
                  let
                </li>
                <li>{candidateDetails.bydliste}</li>
                <li>{candidateDetails.pob}</li>
                <li>{candidateDetails.stav}</li>
                {candidateDetails.deti && <li>{candidateDetails.deti}</li>}
                {candidateDetails.vyznani && (
                  <li>{candidateDetails.vyznani}</li>
                )}
                {(candidateDetails.strana || candidateDetails.minulost) && (
                  <h5 className={styles.bioSubtitle}>Politická příslušnost</h5>
                )}
                {candidateDetails.minulost && (
                  <li>
                    dříve: {candidateDetails.minulost.nazev}{" "}
                    {candidateDetails.minulost.od &&
                      candidateDetails.minulost.do &&
                      `${candidateDetails.minulost.od} -
                  ${candidateDetails.minulost.do}`}
                  </li>
                )}
                {candidateDetails.strana && (
                  <li>
                    nyní: {candidateDetails.strana.nazev}
                    {candidateDetails.strana.od &&
                      `, od ${candidateDetails.strana.od}`}
                  </li>
                )}
                <h5 className={styles.bioSubtitle}>Vzdělání</h5>
                {candidateDetails.vzdelani &&
                  candidateDetails.vzdelani.map((item, index) => {
                    return (
                      <li key={index}>
                        {item.rok && `${item.rok} –`} {item.nazev}
                        {item.obor && `, ${item.obor}`}
                      </li>
                    );
                  })}
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
              <button className={styles.button}>
                Zpět na celkové výsledky
              </button>
            </Link>
          </div>
          <RelatedArticles
            tag={candidateDetails.tag}
            name={candidateDetails.dativ}
          ></RelatedArticles>
        </div>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const data = await fetch(
    "https://data.irozhlas.cz/hot-or-not-data/prez.json"
  ).then(res => res.json());

  return {
    paths: data.filter(item => item.use).map(i => ({ params: { key: i.key } })),
    fallback: false,
  };
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

export default DetailsPage;
