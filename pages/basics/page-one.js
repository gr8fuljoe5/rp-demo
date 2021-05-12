import React from "react";
import Header from "../../components/Header";
import { Typography, Container } from "@material-ui/core";

function PageOne(props) {
  return (
    <Container maxWidth={true}>
      <Header title={"Page One"} />
      <Typography variant={"h1"}>Page One</Typography>
    </Container>
  );
}

export default PageOne;
