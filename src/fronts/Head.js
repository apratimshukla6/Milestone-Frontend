import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import companyLogo from '../assets/companyLogo.svg';
import logo from '../assets/logo.svg';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FuturaPTExtraBold from '../fonts/FuturaPTExtraBold.otf'

const useStyles = makeStyles(theme =>({
    paper:{
      backgroundColor:'#39495E',
      borderRadius:0,
      display:'flex',
      color:'rgba(255, 255, 255, 1)'
    }
}));

function Head()
{
    const classes = useStyles();
    return(
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <img src={companyLogo} style={{padding:'2vh',width:'2vw',height:'6vh',paddingTop:'1vh'}}></img>
              <p className="products">ABC Products</p>
              <img src={logo}  style={{height:'5vh' ,width:'15vw',paddingLeft:'50vh',paddingTop:'1.5vh'}}></img>
            </Paper>
          </Grid>
        </Grid>
    );
}

export default Head;
