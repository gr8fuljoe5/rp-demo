import { useRouter } from "next/router";

import Header from "../../components/Header";

function Name() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <Header title={`Hello, ${name}`} />
      <div>Hello, {name}</div>
    </>
  );
}

export default Name;
