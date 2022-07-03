import React from "react";
import Image from "next/image";
import styles from "../styles/Item.module.css";

const imgLoader = ({ src, width, quality }) => {
  return `https://data.irozhlas.cz/hot-or-not/out${src}-300.jpg`;
};

const Item = props => {
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
          loader={imgLoader}
          className={styles.image}
          src={`/img/${props.candidate.key}`}
          alt={props.candidate.name}
          width={300}
          height={300}
        ></Image>
      </div>
      <h2 className={styles.candidateName}>{props.candidate.name}</h2>
      <p className={styles.shortBio}>
        {`${props.candidate.povolani}, ${Math.floor(
          (Date.now() - Date.parse(props.candidate.dob)) / 31557600000
        )} let, ${props.candidate.bydliste}`}
      </p>
    </button>
  );
};

export default Item;
