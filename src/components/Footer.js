import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@mui/material';

const styles = makeStyles({
    bar: {
      backgroundColor: "black",
      height:"100px",
      "@media (max-width: 780px)": {
        flexDirection: "column",
      },
    },
    title:{
        color: "white",
        fontSize: "8px"
      }
  });

export default function Footer() {
    const classes = styles();
    return (
        <BottomNavigation className={classes.bar}>
            <BottomNavigationAction label="Facebook" icon={<Typography variant="h7" className={classes.title}>
              Developed by Liliane Soares in 2022
            </Typography>} />
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{ fill: "#3b5998" }} />} />
            <BottomNavigationAction label="Twitter" icon={<TwitterIcon style={{ fill: "#1DA1F2" }} />} />
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{ fill: "#C13584" }} />} />
            <BottomNavigationAction label="Youtube" icon={<YouTubeIcon style={{ fill: "#c4302b" }} />} />
        </BottomNavigation>
    )
}
