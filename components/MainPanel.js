import React, { useState, useEffect } from "react";
import Item from "./Item";
import styles from "../styles/MainPanel.module.css";

const pickRandomCandidates = (candidates) => {
  //pick random candidate
  const candidate1 = candidates[Math.floor(Math.random() * candidates.length)];
  let candidate2;

  do {
    candidate2 = candidates[Math.floor(Math.random() * candidates.length)];
  } while (candidate1.id === candidate2.id);

  return [candidate1, candidate2];
  //TODO pick weighted random candidate
};

const MainPanel = (props) => {
  const [candidates, setCandidates] = useState([props.data[0], props.data[1]]);

  useEffect(() => {
    setCandidates(pickRandomCandidates(props.data));
  }, [props.data]);

  return (
    <main className={styles.container}>
      <Item candidate={candidates[0]}></Item>
      <Item candidate={candidates[1]}></Item>
    </main>
  );
};

export default MainPanel;
