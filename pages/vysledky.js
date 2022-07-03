import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ResultsPanel from "../components/ResultsPanel";
import RelatedArticles from "../components/RelatedArticles";
import Link from "next/link";
import Head from "next/head";

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
      <Head>
        <title>
          Průběžné výsledky simulátoru druhého kola prezidentských voleb
        </title>
        <meta
          key="share-image"
          property="og:image"
          content="https://www.irozhlas.cz/sites/default/files/styles/zpravy_facebook/public/uploader/artboard_1_220703-181041_pek.jpg"
        />
        <meta
          property="og:title"
          content="Průběžné výsledky simulátoru druhého kola prezidentských voleb"
        />
        <meta
          property="og:url"
          content="https://data.irozhlas.cz/hrad-or-not/vysledky/"
        />
        <meta
          property="og:description"
          content="Takto by dopadlo hlasování čtenářů iROZHLAS.cz. Také se do něj můžete zapojit."
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Průběžné výsledky simulátoru druhého kola prezidentských voleb"
        />

        <meta name="twitter:site" content="@datarozhlas" />
        <meta name="twitter:creator" content="@tocit" />
        <meta
          name="twitter:image"
          content="https://www.irozhlas.cz/sites/default/files/styles/zpravy_twitter/public/uploader/artboard_1_220703-181041_pek.jpg"
        />
      </Head>

      <div className={styles.container}>
        <Header text="Nejúspěšnější kandidáti"></Header>
        <h3 className={`${styles.subtitle} ${styles.moveup}`}>
          Kliknutím na kandidáta zobrazíte podrobnosti
        </h3>
        <ResultsPanel
          results={results}
          dativ={false}
          data={props.data}
        ></ResultsPanel>
        <div className={styles.buttonContainer}>
          <Link href="/">
            <button className={styles.button}>Zpět k hlasování</button>
          </Link>
        </div>
        <RelatedArticles
          tag={426226}
          name={"prezidentské volbě"}
        ></RelatedArticles>
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
