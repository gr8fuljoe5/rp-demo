import Head from "next/head";
import Header from "../../components/Header";
// import dynamic from "next/dynamic";

// const DynamicComponent = dynamic(() =>
//   import("../../components/Dynamic/hello1")
// );
//
// const DynamicComponentWithCustomLoading = dynamic(
//   () => import("../../components/Dynamic/hello2"),
//   { loading: () => <p>Loading...</p> }
// );

function DynamicImports() {
  return (
    <div>
      <Head>
        <title>RP Next.js Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Dynamic Imports</h1>
      {/*<DynamicComponent />*/}
      {/*<DynamicComponentWithCustomLoading />*/}
      <p>Page is here!</p>
    </div>
  );
}

export default DynamicImports;
