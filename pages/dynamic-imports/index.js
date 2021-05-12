import { useState } from "react";
import { Container } from "@material-ui/core";
import Header from "../../components/Header";
import Fuse from "../../components/Dynamic/fuse";
import dynamic from "next/dynamic";

// import Plot from "react-plotly.js";

const DynamicComponent1 = dynamic(() =>
  import("../../components/Dynamic/hello1")
);

const DynamicComponent2 = dynamic(() =>
  import("../../components/Dynamic/hello2")
);

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

      {/* Load immediately, but in a separate bundle */}
      <DynamicComponent1 />

      {/* This component will never be loaded */}
      {falsyField && <DynamicComponent1 />}

      {/* Load on demand */}
      {showMore && <DynamicComponent2 />}
      <button onClick={() => setShowMore(!showMore)}>Show Component</button>

      {/*<section>*/}
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
      {/*</section>*/}

      {/* Load library on demand */}
      <Fuse />
    </Container>
  );
};

export default IndexPage;
