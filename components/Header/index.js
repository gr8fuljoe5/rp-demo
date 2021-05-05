import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <Link href={"/"}>
        <a>
          <h1>RP Next.JS demo </h1>
        </a>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={"/users"}>
              <a>User List</a>
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
  );
}

export default Header;
