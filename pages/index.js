import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RP Next.js Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! HELLO WORLD</a>
        </h1>

        <div className={styles.grid}>
          <Link href={"/basics"}>
            <a className={styles.card}>
              <h3>The Basics &rarr;</h3>
              <p>Routing, Built-in CSS Support, Image Optimization </p>
            </a>
          </Link>

          <Link href={"/data-fetching"}>
            <a className={styles.card}>
              <h3>Data-Fetching &rarr;</h3>
              <p>See some SSG, SSR and ISR examples in action</p>
            </a>
          </Link>

          <a href={"/dynamic-import"} className={styles.card}>
            <h3>Dynamic Imports &rarr;</h3>
            <p>Learn about the power of dynamic imports</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=mTz0GXj8NN0"
            target={"_blank"}
            className={styles.card}
          >
            <h3>Crash Course &rarr;</h3>
            <p>Great video tutorial with lots of good examples!</p>
          </a>
        </div>

        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js Docs</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
