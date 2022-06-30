import React from "react";
import styles from "../styles/HistoryItem.module.css";

const HistoryItem = props => {
  const winnerID = props.item[2];
  const winner = props.details.filter(
    candidate => candidate.id === winnerID
  )[0];
  const loserID =
    props.item[0] === props.item[2] ? props.item[1] : props.item[0];
  const loser = props.details.filter(candidate => candidate.id === loserID)[0];
  const winnerResults = props.results
    .filter(result => result.id === winnerID)[0]
    .c.filter(result => result.id === loserID)[0];
  const winnerPercentage = Math.round(
    (winnerResults.l / (winnerResults.l + winnerResults.w)) * 100
  );
  return (
    <div className={styles.container}>
      <p>
        <strong>{winner.name}</strong>
        <span className={styles.grey}> × {loser.name}</span>
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
