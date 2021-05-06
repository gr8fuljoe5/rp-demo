import { useState } from "react";
import Header from "../../components/Header";
import dynamic from "next/dynamic";

// import DynamicComponent1 from "../../components/Dynamic/hello1";
// import DynamicComponent2WithCustomLoading from "../../components/Dynamic/hello2";
// import DynamicComponent3WithNoSSR from "../../components/Dynamic/hello3";
// import DynamicComponent4 from "../../components/Dynamic/hello4";
// import DynamicComponent5 from "../../components/Dynamic/hello5";

const DynamicComponent1 = dynamic(() =>
  import("../../components/Dynamic/hello1")
);

const DynamicComponent2WithCustomLoading = dynamic(
  () => import("../../components/Dynamic/hello2"),
  { loading: () => <p>Loading caused by client page transition ...</p> }
);

const DynamicComponent3WithNoSSR = dynamic(
  () => import("../../components/Dynamic/hello3"),
  { loading: () => <p>Loading ...</p>, ssr: false }
);

const DynamicComponent4 = dynamic(() =>
  import("../../components/Dynamic/hello4")
);

const DynamicComponent5 = dynamic(() =>
  import("../../components/Dynamic/hello5")
);

const IndexPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [falsyField] = useState(false);

  return (
    <div>
      <Header title={"Dynamic Imports"} />

      {/* Load immediately, but in a separate bundle */}
      <DynamicComponent1 />

      {/* Show a progress indicator while loading */}
      <DynamicComponent2WithCustomLoading />

      {/* Load only on the client side */}
      <DynamicComponent3WithNoSSR />

      {/* This component will never be loaded */}
      {falsyField && <DynamicComponent4 />}

      {/* Load on demand */}
      {showMore && <DynamicComponent5 />}
      <button onClick={() => setShowMore(!showMore)}>Toggle Show More</button>

      {/* Load library on demand */}
    </div>
  );
};

export default IndexPage;
