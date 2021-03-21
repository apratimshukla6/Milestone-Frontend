import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import edit from '../assets/Path 18191.svg';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Bodytable from '../fronts/Bodytable.js';


const useStyles = makeStyles(theme =>({
    paper:{
      backgroundColor: '#273D49CC',
      borderRadius:'1vh',
      display:'flex',
      width:'97vw',
      marginLeft:'2vh',
    },
    paper1:{
      backgroundColor: '#273D49CC',
      borderRadius:'1vh',
      display:'flex',
      width:'97vw',
      marginLeft:'2vh',
      align:'center'
    },
    grid:{
      backgroundColor:'#39495E',
      height: '100%',
      margin: '0'
    },
    root: {
      display: "flex",
      alignItems: "center",
      width: '40vh',
      height:'4vh',
      border:1,
      borderStyle:"solid",
      borderRadius:'1vh',
      borderColor:'#14AFF1',
      margin:'2vh'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color:'#FFFFFF'
    },
    button1:{
      backgroundColor:'#14AFF1',
      color:'#FFFFFF',
      margin:'2vh',
      textTransform: 'none',
      height:'4vh'
    },
    button2:{
      margin:'2vh',textTransform: 'none',color:'#FFFFFF',borderColor:'#14AFF1',height:'4vh'
    },
    button3:{
      marginLeft:'auto',marginTop:'2vh',marginBottom:'2vh',textTransform: 'none',color:'#FFFFFF',borderColor:'#14AFF1',height:'4vh'
    },
        
}));
function Bodybuttons(props)
{
    const classes=useStyles();
    return(
        <Grid container spacing={0} className={classes.grid}>
            <Grid item xs={12}>
             <Paper elevation={0} className={classes.paper}>
               <Button elevation={0} className={classes.button1}>Predict</Button>
               <Button variant="outlined" elevation={0} color="primary" className={classes.button2}>View Correspondence</Button>
               <Button variant="outlined" elevation={0} color="primary" className={classes.button3} onClick={props.propsFunc}>+ Add</Button>
               <Button variant="outlined" elevation={0} color="primary" className={classes.button2}>
                  <img src={edit} style={{marginRight:'0.4vh'}}></img>
                   Edit
               </Button>
               <Button variant="outlined" elevation={0} color="primary" className={classes.button2}>- Delete</Button>
               <paper className={classes.root}>
                 <InputBase
                  className={classes.input}
                  placeholder="Search By Invoice Number"
                  inputProps={{ 'aria-label': 'search by invoice number' }}/>
                  <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon style={{color:'white'}} />
                  </IconButton>
               </paper>
             </Paper>
             <Grid container spacing={0} className={classes.grid}>
              <Grid item xs={12}>
               <Paper elevation={0} className={classes.paper1}>
                 <Bodytable />
                </Paper> 
              </Grid>
             </Grid>
          </Grid>
        </Grid>
    );
}

export default Bodybuttons;
