import React from 'react'
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        background: "#4f25f7",
        borderRadius: 0,
        color: "afff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7dBed",
        transition: "background .3s, border-color .3s,color .3s",
        "&:hover":{
            backgroundColor: "#4f35f7"
        },
    },
    label:{
        textTransform: "capitalize",
    },
})(Button);


export default function CustomBtn(props) {
  return (
   <StyledButton variante="contained">{props.txt}</StyledButton>
  )
}
