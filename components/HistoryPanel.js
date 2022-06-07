import React from "react";
import HistoryItem from "./HistoryItem";
import styles from "../styles/HistoryPanel.module.css";
import Link from "next/link";

const HistoryPanel = (props) => {
  const reversedHistory = props.history.slice().reverse();
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>
        {props.history.length > 0
          ? props.history.length === 1
            ? "Vyberte z další dvojice. Už jste si vybrali:"
            : "Vybírejte dál, nebo se podívejte na výsledky. Už jste si vybrali:"
          : "Vyberte si jednoho z kandidátů"}
      </h3>
      <div className={styles.historyBox}>
        {reversedHistory.map((item, index) => {
          const details = props.data.filter(
            (candidate) => candidate.id === item[0] || candidate.id === item[1]
          );
          return (
            <HistoryItem
              key={index}
              item={item}
              details={details}
              results={props.results}
            ></HistoryItem>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryPanel;
