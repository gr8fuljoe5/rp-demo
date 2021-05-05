import User from "../../components/User";

function UserPage({ user }) {
  return (
    <>
      <h1>User</h1>
      <User user={user} />
      <a href={"/users"}>Back</a>
    </>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get users
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:3000/api/users/${params.id}`);
  const user = await res.json();

  // Pass post data to the page via props
  return { props: { user } };
}

// export async function getServerSideProps({ params }) {
//   const res = await fetch(`http://localhost:3000/api/users/${params.id}`);
//   const user = await res.json();
//   return {
//     props: { user }, // will be passed to the page component as props
//   };
// }
export default UserPage;
