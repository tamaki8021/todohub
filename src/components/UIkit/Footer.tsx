import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme: Theme) => createStyles({
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    marginTop: 'auto'
  },
  foot: {
    padding: "12px",
    margin: "0 22px",
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  list: {
    listStyle: "none",
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    marginRight: "16px",
    fontSize: '12px'
  },
  copy: {
    fontSize: '12px',
    padding: '5px 0',
    marginRight: '16px'
  },
  icon: {
    padding: '0 12px'
  }
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.foot}>
        <ul className={classes.list}>
          <li className={classes.copy}>&copy; 2021 tamaki</li>
          <li>
            <Link to="/" className={classes.link}>
              利用規約
            </Link>
          </li>
          <li>
            <Link to="/privacy" className={classes.link}>
              プライバシーポリシー
            </Link>
          </li>
        </ul>
        <ul className={classes.list}>
          <li>
            <IconButton className={classes.icon}>
              <TwitterIcon />
            </IconButton>
          </li>
          <li>
            <IconButton className={classes.icon}>
              <FacebookIcon />
            </IconButton>
          </li>
          <li>
            <IconButton className={classes.icon}>
              <GitHubIcon />
            </IconButton>
          </li>
          <li>
            <IconButton className={classes.icon}>
              <InstagramIcon />
            </IconButton>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
