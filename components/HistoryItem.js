import React from "react";
import styles from "../styles/HistoryItem.module.css";

const HistoryItem = props => {
  const winnerID = props.item[2];
  const loserID =
    props.item[0] === props.item[2] ? props.item[1] : props.item[0];
  const winnerResults = props.results
    .find(result => result.id === winnerID)
    .c.find(result => result.id === loserID);
  const winnerPercentage = Math.round(
    (winnerResults.l / (winnerResults.l + winnerResults.w)) * 100
  );
  return (
    <div className={styles.container}>
      <p>
        <span
          className={
            props.item[0] === props.item[2] ? styles.winner : styles.loser
          }
        >
          {" "}
          {props.details.find(candidate => candidate.id === props.item[0]).name}
        </span>
        <span className={styles.grey}> × </span>
        <span
          className={
            props.item[1] === props.item[2] ? styles.winner : styles.loser
          }
        >
          {" "}
          {props.details.find(candidate => candidate.id === props.item[1]).name}
        </span>
      </p>
      {!Number.isNaN(winnerPercentage) && (
        <p className={styles.note}>
          <small>
            {winnerPercentage} % čtenářů před vámi se rozhodlo stejně
          </small>
        </p>
      )}
    </div>
  );
};

export default HistoryItem;
