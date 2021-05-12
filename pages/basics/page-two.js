import React from "react";
import Header from "../../components/Header";
import { Typography, Container } from "@material-ui/core";

function PageTwo(props) {
  return (
    <Container maxWidth={true}>
      <Header title={"Page Two"} />
      <Typography variant={"h1"}>Page Two</Typography>
    </Container>
  );
}

export default PageTwo;
