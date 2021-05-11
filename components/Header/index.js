import Link from "next/link";
import styles from "./Header.module.css";
import Head from "next/head";

function Header(props) {
  return (
    <div>
      <Head>
        <title>{props.title || "Next.js Demo"}</title>
      </Head>
      <header className={styles.container}>
        <Link href={"/"}>
          <a>
            <h1>RP Next.JS demo </h1>
          </a>
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/basics"}>
                <a>Basics</a>
              </Link>
            </li>
            <li>
              <Link href={"/data-fetching/blog"}>
                <a>Data Fetching Blog Demo</a>
              </Link>
            </li>
            <li>
              <Link href={"/icr"}>
                <a>ICR</a>
              </Link>
            </li>
            <li>
              <Link href={"/dynamic-imports"}>
                <a> Dynamic Imports</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
