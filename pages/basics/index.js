import Header from "../../components/Header";
import CssSupport from "../../components/CssSupport";
import Head from "next/head";
import Link from "next/link";
import styles from "./Basics.module.css";
import Image from "next/image";

function Basics() {
  return (
    <div>
      <Head>
        <title>The Basics</title>
      </Head>
      <Header />
      <h1>Basics</h1>

      <h2>Pages and Basic Routing</h2>
      <section className={styles.basicsContainer}>
        <Link href={"/basics/pageOne"}>
          <a>Page One</a>
        </Link>
        <Link href={"/basics/pageTwo"}>
          <a>Page Two</a>
        </Link>
      </section>

      <h2>CSS Support</h2>
      <section>
        <CssSupport />
      </section>

      <h2>Image Optimization</h2>
      <section>{/*// Code goes here*/}</section>
    </div>
  );
}

export default Basics;
