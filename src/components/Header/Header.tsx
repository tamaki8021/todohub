import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from '../../assets/img/logo4.png'
import { Link } from "react-router-dom";
import { useAppSelector } from "../../reducks/store/hooks";
import { HeaderMenu, ClosableDrawer } from "./index";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      color: "white",
      textDecoration: "none",
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const isSignedIn = useAppSelector((state) => state.user.isSignedIn);

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Link to="/" className={classes.title}>
            <img src={logo} alt='TodoHub'/> 
          </Link>
          {isSignedIn ? <ClosableDrawer /> : <HeaderMenu />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
