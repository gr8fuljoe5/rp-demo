import Header from "../../components/Header";
import Link from "next/link";
import { Container, Typography } from "@material-ui/core";

export default function DataFetching() {
  return (
    <Container maxWidth={true}>
      <Header title={"Data Fetching"} />
      <Typography variant={"h1"}>Data Fetching</Typography>
      <p>
        <Link href={"/data-fetching/blog"}>
          <a>Blog</a>
        </Link>
      </p>
      <p>
        <Link href={"/data-fetching/isr"}>
          <a>ISR</a>
        </Link>
      </p>
    </Container>
  );
}
