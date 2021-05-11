function PhotoList(props) {
  console.log(props);
  const { title, thumbnailUrl } = props.user;
  return (
    <section>
      <h1>{title}</h1>
      <aside>
        <img src={thumbnailUrl} alt={title} />
      </aside>
    </section>
  );
}

export default PhotoList;
