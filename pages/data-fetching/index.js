import { USERS } from "../../contants/endpoints";
import UserList from "../../components/UserList";
import Header from "../../components/Header";
import Link from "next/link";

function Index({ data }) {
  return (
    <section>
      <Header title={"SSG"} />
      <h1>Data Fetching</h1>
      <section>
        {data.map((user, idx) => (
          <Link href={`/data-fetching/${user.id}`} key={`user_${idx}`}>
            <a>
              <UserList user={user} showAlbum={false} />
            </a>
          </Link>
        ))}
      </section>
    </section>
  );
}

// Next will fetch this data at BUILD time
export async function getStaticProps() {
  const res = await fetch(USERS);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Index;
