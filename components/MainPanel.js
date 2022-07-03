import React, { useState, useLayoutEffect } from "react";
import Item from "./Item";
import styles from "../styles/MainPanel.module.css";
import { useRouter } from "next/router";

const pickRandomCandidates = (candidates, prevCandidates) => {
  const prevCandidatesIDs = prevCandidates.map(c => [c[0], c[1]]);
  let result;
  let candidate1;
  let candidate2;

  do {
    //pick random candidate
    candidate1 = candidates[Math.floor(Math.random() * candidates.length)];
    candidate2 = candidates[Math.floor(Math.random() * candidates.length)];
    result = [candidate1, candidate2];
  } while (
    candidate1.id === candidate2.id ||
    prevCandidatesIDs.some(
      item => item.includes(candidate1.id) && item.includes(candidate2.id)
    )
  );
  if (prevCandidatesIDs.length > 0) {
    // console.log(result[0], prevCandidatesIDs[prevCandidatesIDs.length - 1][0]);
    if (
      result[0].id === prevCandidatesIDs[prevCandidatesIDs.length - 1][0] ||
      result[1].id === prevCandidatesIDs[prevCandidatesIDs.length - 1][1]
    ) {
      return result.reverse();
    }
  }
  return result;
};

const MainPanel = props => {
  const router = useRouter();
  const [candidates, setCandidates] = useState([props.data[0], props.data[1]]);
  let lastClickTime = Date.now();

  const buttonClickHandler = candidate => {
    if (Date.now() - lastClickTime > 950) {
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
    }
    if (
      props.history.length ===
      (props.data.length ** 2 - props.data.length) / 2 - 1
    ) {
      router.push("/vysledky");
    } else {
      props.setHistory(prevState => {
        return [
          ...prevState,
          [candidates[0].id, candidates[1].id, candidate.id],
        ];
      });

      lastClickTime = Date.now();
    }
  };

  useLayoutEffect(() => {
    setCandidates(pickRandomCandidates(props.data, props.history));
  }, [props.data, props.history]);

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
