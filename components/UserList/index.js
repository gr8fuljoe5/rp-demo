// https://nextjs.org/docs/basic-features/pages#static-generation-recommended
import Link from "next/link";
import styles from "./UserList.module.scss";

function Index(props) {
  const { name, username, address, id } = props.user;
  const { street, suite, city, zipcode } = address;
  return (
    <div>
      <dl className={styles.dl}>
        <dt>User</dt>
        <dd>{`${name} (@${username})`}</dd>
        <dt>Address</dt>
        <dd>{`${street}, ${suite}, ${city}, ${zipcode}`}</dd>
      </dl>
      {props.showAlbum && (
        <Link href={`/data-fetching/albums/${id}`}>Click here for album!</Link>
      )}
    </div>
  );
}
export default Index;
