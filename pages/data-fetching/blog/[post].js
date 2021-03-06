import Link from "next/link";
import Header from "../../../components/Header";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../contants/endpoints";
import styles from "../../../styles/Blog.module.css";
import { Container } from "@material-ui/core";

function Post(props) {
  const { title, id } = props.post;
  console.log(`Post: ${id}`);
  return (
    <Container className={styles.post} maxWidth={true}>
      <Header title={`Blog: ${title}`} />
      <BlogPost post={props.post} />
      <Link href={"/data-fetching/blog"}>
        <a>Back</a>
      </Link>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /users/1, then params.id is 1
  const res = await fetch(`${POSTS}/${params.post}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get users
  const res = await fetch(POSTS);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { post: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// export async function getServerSideProps({ params }) {
//   const res = await fetch(`${POSTS}/${params.post}`);
//   const post = await res.json();
//   console.log("::::::::::");
//   console.log(`Rendering post #${params.post} on the server`);
//   console.log("**********");
//
//   return { props: { post } };
// }

export default Post;
