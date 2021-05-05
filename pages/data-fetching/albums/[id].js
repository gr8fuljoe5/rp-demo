import { ALBUMS } from "../../../contants/endpoints";

function AlbumId(props) {
  return (
    <div>
      <h1>Album</h1>
      <section>
        <ul>
          {props.albums.map((album, idx) => {
            return <li key={idx}>{album.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${ALBUMS}/?userId=${context.params.id}`);
  const albums = await res.json();
  return {
    props: { albums },
  };
}

export default AlbumId;
