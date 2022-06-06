import React from "react";
import Image from "next/image";
import styles from "../styles/Item.module.css";

const Item = (props) => {
  return (
    <button
      className={styles.container}
      value={props.candidate.id}
      onPointerDown={() => {
        props.buttonClickHandler(props.candidate);
      }}
    >
      <div className={styles["image-wrapper"]}>
        <Image
          className={styles.image}
          src={`/img/${props.candidate.key}.jpg`}
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
