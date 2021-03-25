import React from "react";
import { push } from "connected-react-router";
import { useAppDispatch } from "../reducks/store/hooks";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import backgroundImage from "../assets/img/background-img1.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      minHeight: "910px",
      paddingTop: "75px",
      background: "linear-gradient(135deg, #3F51B5, #18FFFF)",
    },
    sectionDesctop: {
      display: "flex",
      justifyContent: "space-around",
      transform: 'translate(0%,35%)'
    },
    box: {
      width: '450px'
    },
    title: {
      textAlign: "center",
      color: "white",
      fontSize: "5rem",
      padding: "2rem 0",
      [theme.breakpoints.up("md")]: {
        lineHeight: "6rem",
        textIndent: "-11.5rem",
        transform: "translate(4rem, 0px)",
        color: "white",
      },
      [theme.breakpoints.only("xs")]: {
        fontSize: "3.7rem",
      },
    },
    text: {
      fontSize: "18px",
      color: "white",
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        transform: "translate(4.5rem, 0px)",
        textAlign: 'left'
      },
    },
    image: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    button: {
      margin: '2rem auto',
      backgroundColor: '#E64A19',
      transform: "translate(8.5rem, 0px)",
      [theme.breakpoints.up("md")]: {
        transform: "translate(4.5rem, 0px)",
      },
      [theme.breakpoints.only('xs')]: {
        transform: 'translate(6.5rem, 0)'
      },
    }
  })
);

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sectionDesctop}>
        <div className={classes.box}>
          <Typography variant="h1" className={classes.title}>
            継続で
            <br />
            やる気アップ
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            タスクを管理し、達成度を可視化することができるので継続してやる気を保つことができます。
          </Typography>
          <Button variant="contained" size="large" color="primary" className={classes.button} onClick={() => dispatch(push("/signin"))}>
            アカウントを作成
          </Button>
        </div>
        <img src={backgroundImage} alt="" className={classes.image} />
      </div>
    </div>
  );
};

export default Home;
