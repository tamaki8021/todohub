import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { push } from "connected-react-router";
import { useAppDispatch } from "../../reducks/store/hooks";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    drawerPaper: {
      width: 254,
    },
    text: {
      fontSize: '1.7rem',
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

const HeaderMenu = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem
          button
          onClick={() => {
            dispatch(push("/signin"));
            handleDrawerToggle();
          }}
        >
          <ListItemText primary="ログイン" classes={{primary: classes.text}} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            dispatch(push("/signup"));
            handleDrawerToggle();
          }}
        >
          <ListItemText primary="登録する" classes={{primary: classes.text}} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.sectionDesktop}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => dispatch(push("/signin"))}
        >
          ログイン
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => dispatch(push("/signup"))}
        >
          登録する
        </Button>
      </div>

      <IconButton
        color="inherit"
        className={classes.sectionMobile}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default HeaderMenu;
