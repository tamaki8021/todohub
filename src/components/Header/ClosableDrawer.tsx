import React, { useState } from "react";
import { useAppDispatch } from "../../reducks/store/hooks";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import { signOut } from "../../reducks/users/operations";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

const ClosableDrawer = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobilMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={() => dispatch(signOut())}>
        <IconButton color="inherit">
          <ExitToAppIcon />
        </IconButton>
        <p>ログアウト</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <div className={classes.sectionDesktop}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ExitToAppIcon />}
          onClick={() => dispatch(signOut())}
        >
          signout
        </Button>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-controls={mobileMenuId}
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </div>
      {renderMobilMenu}
    </div>
  );
};

export default ClosableDrawer;
