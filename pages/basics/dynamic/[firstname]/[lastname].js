import { useRouter } from "next/router";

import Header from "../../../../components/Header";
import { Typography, Container } from "@material-ui/core";

function Page() {
  const router = useRouter();
  const { firstname, lastname } = router.query;
  return (
    <Container maxWidth={true}>
      <Header title={`${firstname}: ${firstname}: Dynamic Routing`} />
      <Typography variant={"h2"}>Dynamic Routing</Typography>
      <Typography variant={"body1"}>First Name: {firstname}</Typography>
      <Typography variant={"body2"}>Last Name: {lastname}</Typography>
    </Container>
  );
}

export default Page;
