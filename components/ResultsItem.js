import React from "react";
import styles from "../styles/ResultsItem.module.css";
import Image from "next/image";

const imgLoader = ({ src, width, quality }) => {
  return `https://data.irozhlas.cz/hot-or-not/out${src}`;
};

const ResultsItem = (props) => {
  return (
    <div className={styles.container}>
      <Image
        loader={imgLoader}
        className={styles.image}
        src={`/img/${props.candidate.key}.jpg`}
        alt={props.candidate.name}
        width={75}
        height={75}
      ></Image>
      <div className={styles.textbox}>
        <p className={styles.note}>
          <strong>{`${props.index}. ${props.candidate.name}`} </strong>
        </p>
        <p className={styles.note}>{`${
          props.candidateResults.pct
        } % vítězství z  ${
          props.candidateResults.w + props.candidateResults.l
        } duelů`}</p>
      </div>
    </div>
  );
};

export default ResultsItem;
