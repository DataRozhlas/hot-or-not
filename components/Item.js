import React from "react";
import Image from "next/image";
import styles from "../styles/Item.module.css";

const buttonClickHandler = (candidate) => {
  console.log(candidate);
};

const Item = (props) => {
  return (
    <button
      className={styles.container}
      value={props.candidate.id}
      onClick={() => {
        buttonClickHandler(props.candidate);
      }}
    >
      <div className={styles["image-wrapper"]}>
        <Image
          className={styles.image}
          src={props.candidate.img}
          alt={props.candidate.name}
          width={300}
          height={300}
        ></Image>
      </div>
      <h2>{props.candidate.name}</h2>
    </button>
  );
};

export default Item;
