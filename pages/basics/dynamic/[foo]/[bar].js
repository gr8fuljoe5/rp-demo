import { useRouter } from "next/router";

import Header from "../../../../components/Header";

function Page() {
  const router = useRouter();
  const { foo, bar } = router.query;
  return (
    <section>
      <Header title={`${foo}: ${bar}: Dynamic Routing`} />
      <div>Foo: {foo}</div>
      <div>Bar: {bar}</div>
    </section>
  );
}

export default Page;
