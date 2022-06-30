import React, { useState, useEffect } from "react";
import Item from "./Item";
import styles from "../styles/MainPanel.module.css";

const pickRandomCandidates = (candidates, prevCandidates) => {
  console.log(prevCandidates);
  const prevCandidatesIDs = prevCandidates.map(c => c.id);
  //pick random candidate
  let candidate1;
  do {
    candidate1 = candidates[Math.floor(Math.random() * candidates.length)];
  } while (prevCandidatesIDs.includes(candidate1.id));

  let candidate2;

  do {
    candidate2 = candidates[Math.floor(Math.random() * candidates.length)];
  } while (
    candidate1.id === candidate2.id ||
    prevCandidatesIDs.includes(candidate2.id)
  );

  return [candidate1, candidate2];
  //TODO pick weighted random candidate
};

const MainPanel = props => {
  const [candidates, setCandidates] = useState([props.data[0], props.data[1]]);

  const buttonClickHandler = candidate => {
    //save tip to dynamodb
    const http = new XMLHttpRequest();
    const url =
      "https://2gaah2e3wd66vqvlgcocgzzb4q0pnbjj.lambda-url.eu-central-1.on.aws/";
    http.open("POST", url);
    http.send(
      JSON.stringify({
        appID: "prez",
        winnerID: candidate.id,
        loserID: candidates.filter(c => c.id !== candidate.id)[0].id,
        url: document.URL,
        ref: document.referrer,
      })
    );
    props.setHistory(prevState => {
      return [...prevState, [candidates[0].id, candidates[1].id, candidate.id]];
    });
    setCandidates(prevState => {
      return pickRandomCandidates(props.data, prevState);
    });
  };

  useEffect(() => {
    setCandidates(prevState => {
      return pickRandomCandidates(props.data, prevState);
    });
  }, [props.data]);

  return (
    <main className={styles.container}>
      <Item
        candidate={candidates[0]}
        buttonClickHandler={buttonClickHandler}
      ></Item>
      <Item
        candidate={candidates[1]}
        buttonClickHandler={buttonClickHandler}
      ></Item>
    </main>
  );
};

export default MainPanel;
