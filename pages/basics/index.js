import Header from "../../components/Header";
import CssSupport from "../../components/CssSupport";
import Link from "next/link";
import styles from "../../styles/Basics.module.css";
import Image from "next/image";
import { Typography, Paper, Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "95%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Basics() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title={"The Basics"} />

      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant={"h1"}>Basics</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant={"h2"}>Pages and Basic Routing</Typography>
            <section className={styles.basicsContainer}>
              <Link href={"/basics/page-one"}>
                <a>Page One</a>
              </Link>
              <Link href={"/basics/page-two"}>
                <a>Page Two</a>
              </Link>
            </section>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant={"h2"}>CSS Support</Typography>
            <section>
              <CssSupport />
            </section>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant={"h2"}>Image Optimization</Typography>
            <Paper elevation={2}>
              <section>
                <div>
                  <img
                    src={"/high-res.jpg"}
                    width={500}
                    height={500}
                    alt={"hello world"}
                  />
                </div>
              </section>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Basics;
