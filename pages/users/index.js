import Head from "next/head";
import Link from "next/link";
import User from "../../components/user";

function Users(props) {
  return (
    <div>
      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Users</h1>
      {props &&
        props.users &&
        props.users.map((user, idx) => {
          return (
            <Link href={`/users/${encodeURIComponent(user.id)}`}>
              <a>
                <User user={user} key={idx} />
              </a>
            </Link>
          );
        })}
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  return {
    props: { users },
  };
}

export default Users;
