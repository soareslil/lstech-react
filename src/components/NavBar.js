import { LocationSearchingOutlined } from "@material-ui/icons";
import React from "react";
import CustomBtn from "./CustomBtn";
import logo from "./logo-lstech.png";
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "black",
    "@media (max-width: 780px)": {
      flexDirection: "column",
    },
  },
  logo: {
      width:"10%",
      '@media (max-width: 750px)':{
          display: "none"
      }
  },
  logoMobile: {
      width: "100%",
      display: "none",
      '@media (max-width: 780px)':{
          display:"inline-block"
      }
  },
  menuItem:{
      cursor: "pointer",
      color: "white",
      flexGrow: 1,
      "&:hover":{
          color: "#4f25c8"
      },
      '@media(max-width: 780px)':{
          paddingBottom: "1rem"
      }
  }
});

export default function NavBar() {
  const classes = styles();
  return (
    <Toolbar
      position="sticky"
      color="rgba(0,0,0, 0.87)"
      className={classes.bar}
    >
      <img src={logo} className={classes.logo} alt="imgLogo" />
      <img src={logo} className={classes.logoMobile} alt="imgLogo" />

      <Typography variante="h6" className={classes.menuItem}>
        About
      </Typography>

      <Typography variante="h6" className={classes.menuItem}>
        Blog
      </Typography>

      <Typography variante="h6" className={classes.menuItem}>
        Careers
      </Typography>

      <Typography variante="h6" className={classes.menuItem}>
        Demos
      </Typography>

      <Typography variante="h6" className={classes.menuItem}>
        Contact Us
      </Typography>

      <CustomBtn txt="Tial Our Product" />
    </Toolbar>
  );
}
