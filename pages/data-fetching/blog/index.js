import Link from "next/link";
import { POSTS } from "../../../contants/endpoints";
import Header from "../../../components/Header";
import { Typography, Container, Grid } from "@material-ui/core";
import BlogPost from "../../../components/BlogPost";
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
              <BlogPost post={post} />
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
