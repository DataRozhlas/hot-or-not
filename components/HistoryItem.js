import React from "react";
import styles from "../styles/HistoryItem.module.css";

const HistoryItem = (props) => {
  const winner = props.details.filter(
    (candidate) => candidate.id === props.item[2]
  )[0];
  const loserID =
    props.item[0] === props.item[2] ? props.item[1] : props.item[0];
  const loser = props.details.filter(
    (candidate) => candidate.id === loserID
  )[0];
  return (
    <div className={styles.container}>
      <p>
        <strong>{winner.akuzativ}</strong> proti {loser.dativ}
      </p>
      <p className={styles.note}>
        <small>stejně jako x % čtenářů před vámi</small>
      </p>
    </div>
  );
};

export default HistoryItem;
