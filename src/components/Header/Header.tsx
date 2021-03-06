import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useAppDispatch, useAppSelector } from "../../reducks/store/hooks";
import { push } from 'connected-react-router'
import { HeaderMenu } from './index'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isSignedIn = useAppSelector((state) => state.user.isSignedIn);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {isSignedIn ? (
            <HeaderMenu />
          ):(
            <div>
              <Button color='inherit' onClick={() => dispatch(push('/signin'))}>ログイン</Button>
              <Button color='inherit' onClick={() => dispatch(push('/signup'))} >登録する</Button>
            </div>
          )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
