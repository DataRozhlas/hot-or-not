import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainPanel from "../components/MainPanel";
import data from "../components/GetData";

export default function Home() {
  return (
    <div>
      <MainPanel data={data}></MainPanel>
    </div>
  );
}
