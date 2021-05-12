import React from "react";
import Header from "../../components/Header";
import { Typography, Container } from "@material-ui/core";

function PageThee(props) {
  return (
    <Container maxWidth={true}>
      <Header title={"Page Tree"} />
      <Typography variant={"h1"}>Page Tree</Typography>
    </Container>
  );
}

export default PageThee;
