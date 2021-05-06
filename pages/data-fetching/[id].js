import UserList from "../../components/UserList";
import { USERS } from "../../contants/endpoints";

function UserById(props) {
  return (
    <div>
      <h1>UserById</h1>
      <section>
        <UserList {...props} showAlbum={true} />
      </section>
    </div>
  );
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /users/1, then params.id is 1
  const res = await fetch(`${USERS}/${params.id}`);
  const user = await res.json();

  // Pass post data to the page via props
  return { props: { user } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get users
  const res = await fetch(USERS);
  const users = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at runtime time
// export async function getServerSideProps({ params }) {
//   const res = await fetch(`${USERS}/${params.id}`);
//   const user = await res.json();
//
//   // Pass post data to the page via props
//   return { props: { user } };
// }

export default UserById;
