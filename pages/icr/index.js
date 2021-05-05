// https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration

import Header from "../../components/Header";

function Index({ random }) {
  const { entries } = random;
  console.log("data entries => ", entries);
  return (
    <div>
      <Header title={"ICR"} />
      <h1>Incremental Static Regeneration</h1>
      <ul>
        {entries.map((entry, idx) => {
          return (
            <>
              <li key={`api_${idx}`}>API: {entry.API}</li>
              <li key={`desc_${idx}`}>Description: {entry.Description}</li>
              <li key={`cat_${idx}`}>Category: {entry.Category}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch("https://api.publicapis.org/random");
  const random = await res.json();

  return {
    props: {
      random,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every X seconds
    revalidate: 5, // In seconds
  };
}

export default Index;
