import React from "react";
import Header from "../../components/Header";
import { Typography } from "@material-ui/core";

function PageTwo(props) {
  return (
    <>
      <Header title={"Page Two"} />
      <Typography variant={"h1"}>Page Two</Typography>
    </>
  );
}

export default PageTwo;
