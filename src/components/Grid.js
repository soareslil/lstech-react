import React from 'react';
import CustomBtn from "./CustomBtn";
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    wrapper:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding:"0 5rem 0 5rem"
    },
    item:{
        paddingTop: "1rem"
    }
});
export default function Grid(props) {
    const classes = styles();
    const {icon, title, btnTitle} = props;
  return (
    <div className={classes.wrapper}>
        <div className={classes.item}>{icon}</div>
        <Typography className={classes.item} variante="h5">{title}</Typography>
        <div className={classes.item}>
            <CustomBtn txt={btnTitle}/>
        </div>
    </div>
  )
}
