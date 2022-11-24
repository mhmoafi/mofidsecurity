import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Table from "../global/Table";
import Footer from "../Layout/Footer";
import styles from "../styles/Home.module.css";

type PropsType = {
  id: string;
};
type StateType = {};
export default function HomePage(props: PropsType) {
  const { id } = props;
  return (
    <>
      <div>{id}</div>
      <Table />
    </>
  );
}
