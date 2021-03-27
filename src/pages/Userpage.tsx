import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAppSelector } from "../reducks/store/hooks";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { AccountCircle } from "@material-ui/icons";
import { HeatmapCalendar } from "../components/User";

const useStyles = makeStyles({
  container: {
    margin: "0 auto",
    maxWidth: "400px",
    padding: "170px 0 375px",
    height: "auto",
  },
  center: {
    margin: "0 auto",
    width: 200,
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  buttonCenter: {
    margin: '0 auto',
    width: 120
  }
});

const Userpage: React.FC = () => {
  const classes = useStyles();
  const username = useAppSelector((state) => state.user.username);

  return (
    <div className={classes.container}>
      <Typography variant="h5">マイページ</Typography>

      <div className="module-spacer--small"></div>

      <div className={classes.center}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField value={username} />
          </Grid>
        </Grid>
      </div>

      <div className="module-spacer--small"></div>

      <HeatmapCalendar />

      <div className="module-spacer--small"></div>

      <div className={classes.buttonCenter}>
        <Button variant="contained" color="primary" >
          <Link to="/todo" className={classes.link}>todoに戻る</Link>
        </Button>
      </div>
    </div>
  );
};

export default Userpage;
