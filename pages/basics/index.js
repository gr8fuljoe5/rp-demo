import Header from "../../components/Header";
import CssSupport from "../../components/CssSupport";
import Link from "next/link";
import styles from "../../styles/Basics.module.css";
import Image from "next/image";
import { Grid, Paper, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function Basics() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth>
      <Header title={"The Basics"} />
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant={"h1"}>The Basics</Typography>
        </Grid>
        {/*Routing
          https://nextjs.org/docs/routing/introduction
          https://nextjs.org/docs/routing/dynamic-routes
          https://nextjs.org/docs/api-routes/introduction
        */}
        <Grid item xs={12}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant={"h4"}>
              Routing (Basic, Dynamic and API)
            </Typography>
            <section className={styles.basicsContainer}>
              <Typography variant={"h5"}>Basic</Typography>
              <Link href={"/basics/page-one"}>
                <a>Page One</a>
              </Link>
              <Link href={"/basics/page-two"}>
                <a>Page Two</a>
              </Link>
            </section>
            <section className={styles.basicsContainer}>
              <Typography variant={"h5"}>Dynamic</Typography>
              <Link href={"/basics/dynamic/Joe/Kanakaraj"}>
                <a>Joe Kanakaraj</a>
              </Link>
              <Link href={"/basics/dynamic/John/Jenson"}>
                <a>John Jenson</a>
              </Link>
            </section>

            <section className={styles.basicsContainer}>
              <Typography variant={"h5"}>API Routing</Typography>
              <Link href={"/api/users"}>
                <a>Users List</a>
              </Link>
              <Link href={"/api/users/5"}>
                <a>User #5</a>
              </Link>
              <Link href={"/api/users/abababa"}>
                <a>Invalid Route</a>
              </Link>
            </section>
          </Paper>
        </Grid>
        {/*CSS Support
        https://nextjs.org/docs/basic-features/built-in-css-support
        */}
        <Grid item xs={12}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant={"h2"}>CSS Support</Typography>
            <section>
              <CssSupport />
            </section>
          </Paper>
        </Grid>
        {/*Image Optimization
         https://nextjs.org/docs/basic-features/image-optimization
         */}
        <Grid item xs={12}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant={"h2"}>Image Optimization</Typography>
            <Paper elevation={2}>
              <section>
                <div>
                  <Image
                    src={"/high-res.jpg"}
                    width={1200}
                    height={500}
                    alt={"hello world"}
                  />
                </div>
              </section>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Basics;
