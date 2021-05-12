import styles from "./Support.module.css";
import sass from "./Support2.module.scss";

import { Card, Grid } from "@material-ui/core";

function Index(props) {
  return (
    <>
      {/*<Grid className={styles.main} container spacing={2}>*/}
      {/*  <Grid item xs={6}>*/}
      {/*    <Card className={styles.container}>Css Modules Support</Card>*/}
      {/*  </Grid>*/}

      {/*  <Grid item xs={6}>*/}
      {/*    <Card className={sass.container}>Css Sass Support</Card>*/}
      {/*  </Grid>*/}
      {/*  <Grid item xs={12}>*/}
      {/*    <p>*/}
      {/*      Next also supports Less, Stylus, Tailwind and CSS-in-JS options.{" "}*/}
      {/*    </p>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>Css Modules Support</Card>
        </Grid>

        <Grid item xs={6}>
          <Card>Css Sass Support</Card>
        </Grid>
        <Grid item xs={12}>
          <p>
            Next also supports Less, Stylus, Tailwind and CSS-in-JS options.{" "}
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
