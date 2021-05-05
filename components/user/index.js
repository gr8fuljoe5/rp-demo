function User({ user }) {
  return (
    <section>
      <h1>{`${user.first_name} ${user.last_name}`}</h1>
      <p>Email: {user.email}</p>
      <p>Mobile: {user.mobile}</p>
      <p>{user.description}</p>
    </section>
  );
}

export default User;
