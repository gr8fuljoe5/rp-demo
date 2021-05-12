import Link from "next/link";
import { POSTS } from "../../../contants/endpoints";
import Header from "../../../components/Header";
import { Typography, Container, Card, Grid } from "@material-ui/core";

function Blog(props) {
  const { posts } = props;
  return (
    <Container maxWidth>
      <Header title={"Blog"} />
      <Typography variant={"h2"}>Welcome to my blog</Typography>
      <Grid container spacing={2}>
        {posts.map((post) => {
          return (
            <Grid item xs={12}>
              <Card style={{ padding: 10 }}>
                <Link href={`/data-fetching/blog/${post.id}`} key={post.id}>
                  <a>
                    <Typography variant={"h5"}>{post.title}</Typography>
                  </a>
                </Link>
                <Typography variant={"body1"}>{post.body}</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch(POSTS);
  const posts = await res.json();
  console.log(":::::::::::::::::");
  console.log("render on server");
  console.log("*****************");
  return {
    props: {
      posts,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch(POSTS);
//   const posts = await res.json();
//   console.log(":::::::::::::::::");
//   console.log("render on build");
//   console.log(":::::::::::::::::");
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default Blog;
