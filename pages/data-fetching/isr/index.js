// https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration

import Header from "../../../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Index({ random }) {
  const { entries } = random;
  const classes = useStyles();

  // console.log("data entries => ", entries);

  return (
    <Container maxWidth={true}>
      <Header title={"Incremental Static Regeneration"} />
      <Typography variant={"h1"}>Incremental Static Regeneration</Typography>
      {entries.map((entry, idx) => {
        const { API, Link, Description, Category } = entry;
        return (
          <Card className={classes.root} elevation={10}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {API}
              </Typography>
              <Typography variant="body2" component="p">
                {Description}
              </Typography>
              <div style={{ marginTop: 10 }}>
                <Chip
                  avatar={<Avatar>{Category.slice(0, 1)}</Avatar>}
                  label={Category}
                />
              </div>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  window.open(Link);
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Container>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch("https://api.publicapis.org/random");
  const random = await res.json();
  console.log(":::::");
  console.log("random data =>", random);
  console.log("*****");

  return {
    props: {
      random,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every X seconds
    revalidate: 15, // In seconds
  };
}

export default Index;
