import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './App.css';
import Grid from './components/Grid';
import NavBar from './components/NavBar';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import { Typography } from '@material-ui/core';

const styles = makeStyles({
  wrapper:{
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace:{
    marginTop: "4rem"
  },
  littleSpace:{
    marginTop: "2.5rem"
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  title:{
    fonteSize: "10%",
    paddingTop: "40px"
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Typography variant="h4" className={classes.title}>
          At LSTECH we are passionate about software
        </Typography>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Grid icon={<SecurityIcon style={{fill:"#4360A6", height:"125", width: "125"}}/>} title="Secure" btnTitle="Show me more"/>
        <Grid icon={<EventNoteIcon style={{fill:"#4360A6", height:"125", width: "125"}}/>} title="Reliable" btnTitle="Show me more"/>
        <Grid icon={<TrendingUpIcon style={{fill:"#4360A6", height:"125", width: "125"}}/>} title="Performant" btnTitle="Show me more"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
        <Grid icon={<ImportExportIcon style={{fill:"#4360A6", height:"125", width: "125"}}/>} title="ImportExport" btnTitle="Show me more"/>
        <Grid icon={<ComputerIcon style={{fill:"#4360A6", height:"125", width: "125"}}/>} title="Computer" btnTitle="Show me more"/>
        <Grid icon={<HttpIcon style={{fill:"#4360A6", height:"125", width: "125"}}/>} title="Http" btnTitle="Show me more"/>
        </div>
        </ThemeProvider>
    </div>
  );
}

export default App;
