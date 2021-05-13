import { useState } from "react";
import { Container, Card, Grid, Typography } from "@material-ui/core";
import Header from "../../components/Header";
import dynamic from "next/dynamic";

import Plot from "react-plotly.js";

const DynamicComponent1 = dynamic(() =>
  import("../../components/Dynamic/hello1")
);

const DynamicComponent2 = dynamic(() =>
  import("../../components/Dynamic/hello2")
);

const FuseComponent = dynamic(() => {
  return import("../../components/Dynamic/fuse");
});

// const Plot = dynamic(
//   () => {
//     return import("react-plotly.js");
//   },
//   { loading: () => <p>Loading Plotly library...</p>, ssr: false }
// );

const IndexPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [falsyField] = useState(false);

  return (
    <Container maxWidth>
      <Header title={"Dynamic Imports"} />
      <Grid container spacing={2}>
        <Grid>
          <Typography variant={"h2"}>Dynamic Imports</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"body1"}>
            Load immediately, but in a separate bundle
          </Typography>
          {/* Load immediately, but in a separate bundle */}
          <Card>
            <DynamicComponent1 />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"body1"}>
            This component will never be loaded
          </Typography>
          {/* This component will never be loaded */}
          <Card>{falsyField && <DynamicComponent1 />}</Card>
        </Grid>
        <Grid item xs={12}>
          {/* Load on demand */}
          <Card>
            <Typography variant={"body1"}>Loaded on demand</Typography>
            {showMore && <DynamicComponent2 />}
            <button onClick={() => setShowMore(!showMore)}>
              Show Component
            </button>
          </Card>
        </Grid>
        <Grid item xs={12}>
          {/* Load library on demand */}
          <Typography variant={"body1"}>
            Load 3rd party library on demand{" "}
          </Typography>
          <Card>
            <FuseComponent />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"body1"}>Loads with no SSR</Typography>
          {/*  <Plot*/}
          {/*    data={[*/}
          {/*      {*/}
          {/*        x: [1, 2, 3],*/}
          {/*        y: [2, 6, 3],*/}
          {/*        type: "scatter",*/}
          {/*        mode: "lines+markers",*/}
          {/*        marker: { color: "red" },*/}
          {/*      },*/}
          {/*      { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },*/}
          {/*    ]}*/}
          {/*    layout={{ width: 320, height: 240, title: "A Fancy Plot" }}*/}
          {/*  />*/}
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndexPage;
