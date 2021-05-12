import React from "react";
import Header from "../../components/Header";
import { Typography } from "@material-ui/core";

function PageOne(props) {
  return (
    <>
      <Header title={"Page One"} />
      <Typography variant={"h1"}>Page One</Typography>
    </>
  );
}

export default PageOne;
