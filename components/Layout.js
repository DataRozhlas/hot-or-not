import React from "react";
import Head from "next/head";
//import Header from "./Header";
import styles from "../styles/Layout.module.css";
import NavBar from "./NavBar";

const Layout = props => {
  return (
    <>
      <Head>
        <title>Kdo by byl lepší prezident?</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta key="share-image" property="og:image" content="./img/share.png" />
        <meta
          property="og:title"
          content="Kdo by podle vás byl lepší prezident?"
        />
        <meta name="twitter:card" content="summary" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles.container}>
        <NavBar></NavBar>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
