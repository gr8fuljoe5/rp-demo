import Link from "next/link";
import { POSTS } from "../../../contants/endpoints";
import Header from "../../../components/Header";

function Blog(props) {
  const { posts } = props;
  return (
    <section>
      <Header title={"Blog"} />
      <h1>Welcome to my blog</h1>
      {posts.map((post) => {
        return (
          <Link href={`/data-fetching/blog/${post.id}`} key={post.id}>
            <a>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </a>
          </Link>
        );
      })}
    </section>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(POSTS);
//   const posts = await res.json();
//   console.log(":::::::::::::::::");
//   console.log("render on server");
//   console.log(":::::::::::::::::");
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(POSTS);
  const posts = await res.json();
  console.log(":::::::::::::::::");
  console.log("render on build");
  console.log(":::::::::::::::::");
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
