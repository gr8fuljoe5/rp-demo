import Head from "next/head";
import Header from "../../components/Header";
function DynamicImports() {
  return (
    <div>
      <Head>
        <title>RP Next.js Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Dynamic Imports</h1>
    </div>
  );
}

export default DynamicImports;
