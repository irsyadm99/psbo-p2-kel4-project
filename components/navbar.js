import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  Avatar,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import { useState } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: "5px",
  },
  iconbutton: {},
  appbar: {
    backgroundColor: "#FFDCE0",
    boxShadow: "none",
  },
  button: {
    backgroundColor: "#F80658",
    marginLeft: "auto",
    marginRight: "20px",
    width: "8vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 5%",
  },
  menuItem: {
    marginLeft: "35px",
    color: "#656464",
    fontFamily: "Roboto",
    textDecoration: "none",
    fontStyle: "medium",
    fontSize: "16pt",
  },
  txtButton: {
    color: "#ffffff",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
  },
  inputRoot: {},
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar({ dataContent, ...props }) {
  const { currentUser, setCurrentUser } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  // const { id } = dataContent;
  const router = useRouter();
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/");
  };

  const handleEdit = () => {
    router.push("/editprofil");
  };

  // const handleProfile = () => {
  //   router.push(`/profile/${id}`);
  // };

  return (
    <>
      <AppBar position="static" className={classes.appbar} {...props}>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.iconbutton} href="/">
            <img src="/logos.svg" width={157} height={36} />
          </IconButton>
          <Link href="/">
            <a className={classes.menuItem}>Home</a>
          </Link>
          <Link href="#what-is">
            <a className={classes.menuItem}>What is Taaruf?</a>
          </Link>
          <Link href="#howto">
            <a className={classes.menuItem}>How To</a>
          </Link>
          <Link href="/findpartner">
            <a className={classes.menuItem}>Find Partner</a>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {currentUser !== null ? (
            <Box marginLeft="auto" marginRight="20px">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                size="medium"
              >
                <Avatar src="https://source.unsplash.com/random" />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleEdit}>Edit Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              className={classes.button}
              size="large"
              variant="contained"
              href="/signin"
            >
              <Typography variant="h6" className={classes.txtButton}>
                Login
              </Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

Navbar.propTypes = {
  dataContent: PropTypes.object,
};
