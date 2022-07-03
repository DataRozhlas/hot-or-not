import React from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

const imgLoader = ({ src, width, quality }) => {
  return `https://data.irozhlas.cz/hrad-or-not${src}`;
};

const NavBar = () => {
  return (
    <>
      <nav className={styles["top-menu"]}>
        <Link href="https://irozhlas.cz/">
          <a
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Image
              loader={imgLoader}
              alt="iROZHLAS.cz"
              src="/img/irozhlas.svg"
              height={50}
              width={120}
            ></Image>
          </a>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
