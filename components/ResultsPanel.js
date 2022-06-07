import React from "react";
import ResultsItem from "./ResultsItem";
import data from "../components/GetData";
import styles from "../styles/ResultsPanel.module.css";

const ResultsPanel = (props) => {
  const candidates = props.results
    .map((candidate) => {
      return {
        ...candidate,
        pct: Math.round((candidate.w / (candidate.w + candidate.l)) * 100),
      };
    })
    .sort((a, b) => {
      return b.pct - a.pct;
    });
  return (
    <div className={styles.container}>
      {candidates.map((candidate, index) => (
        <ResultsItem
          key={candidate.id}
          index={index + 1}
          candidateResults={candidate}
          candidate={data.filter((i) => i.id === candidate.id)[0]}
        ></ResultsItem>
      ))}
    </div>
  );
};

export default ResultsPanel;
