import React from "react";
import styles from "../styles/ResultsItem.module.css";
import Image from "next/image";
import Link from "next/link";

const imgLoader = ({ src, width, quality }) => {
  return `https://data.irozhlas.cz/hot-or-not/out${src}-300.jpg`;
};

const ResultsItem = props => {
  return (
    <Link href={`/${props.candidate.key}`}>
      <div className={styles.container}>
        <Image
          loader={imgLoader}
          className={styles.image}
          src={`/img/${props.candidate.key}`}
          alt={props.candidate.name}
          width={75}
          height={75}
        ></Image>
        <div className={styles.textbox}>
          <p className={styles.note}>
            <strong>
              {`${props.index}. ${
                props.dativ ? props.candidate.dativ : props.candidate.name
              }`}{" "}
            </strong>
          </p>
          <p className={styles.note}>{`${
            props.dativ
              ? 100 - props.candidateResults.pct
              : props.candidateResults.pct
          } % vítězství z  ${
            props.candidateResults.w + props.candidateResults.l
          } duelů`}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResultsItem;
