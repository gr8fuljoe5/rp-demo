import Link from "next/link";
import styles from "./Header.module.css";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  return (
    <section>
      <Head>
        <title>{props.title || "Next.js Demo"}</title>
      </Head>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link href={"/"}>
                <a>NextJS Demo</a>
              </Link>
            </Typography>
            <MenuItem>
              <Link href={"/basics"}>
                <a>Basics</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/data-fetching/blog"}>
                <a>Data Fetching Blog Demo</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/icr"}>
                <a>ICR</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/dynamic-imports"}>
                <a> Dynamic Imports</a>
              </Link>
            </MenuItem>
          </Toolbar>
        </AppBar>
      </div>
    </section>
  );
}

export default Header;
