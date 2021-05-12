import Header from "../../components/Header";
import Link from "next/link";

export default function DataFetching() {
  return (
    <section>
      <Header title={"Data Fetching"} />
      <h1>Data Fetching</h1>
      <p>
        <Link href={"/data-fetching/blog"}>
          <a>Blog</a>
        </Link>
      </p>
      <p>
        <Link href={"/data-fetching/icr"}>
          <a>ICR</a>
        </Link>
      </p>
    </section>
  );
}
