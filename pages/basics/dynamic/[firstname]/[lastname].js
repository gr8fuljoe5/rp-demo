import { useRouter } from "next/router";

import Header from "../../../../components/Header";
import { Typography } from "@material-ui/core";

function Page() {
  const router = useRouter();
  const { firstname, lastname } = router.query;
  return (
    <section>
      <Header title={`${firstname}: ${firstname}: Dynamic Routing`} />
      <Typography variant={"h2"}>Dynamic Routing</Typography>
      <div>First Name: {firstname}</div>
      <div>Last Name: {lastname}</div>
    </section>
  );
}

export default Page;
