import React from "react";
import ResultsItem from "./ResultsItem";
import styles from "../styles/ResultsPanel.module.css";

const ResultsPanel = props => {
  const candidates = props.results
    .map(candidate => {
      return {
        ...candidate,
        pct: Math.round((candidate.w / (candidate.w + candidate.l)) * 100),
      };
    })
    .sort((a, b) => {
      return props.dativ ? a.pct - b.pct : b.pct - a.pct;
    });
  return (
    <div className={styles.container}>
      {candidates.map((candidate, index) => {
        const candidateDetail = props.data.filter(
          i => i.id === candidate.id
        )[0];
        return (
          typeof candidateDetail !== "undefined" && (
            <ResultsItem
              key={candidate.id}
              index={index + 1}
              candidateResults={candidate}
              candidate={candidateDetail}
              dativ={props.dativ}
            ></ResultsItem>
          )
        );
      })}
    </div>
  );
};

export default ResultsPanel;
