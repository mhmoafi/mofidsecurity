import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import HomePage from "../src/components/HomePage";
import styles from "../styles/Home.module.css";

export default function Home() {
  const {
    query: { id },
  } = useRouter();
  return <HomePage id={id!} />;
}
