import React, {Fragment, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import edit from '../assets/Path 18191.svg';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Bodytable from '../fronts/Bodytable.js';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";

const CssTextField = withStyles({
  root: {
    background: '#283A46',
    padding: '0px',
    height: '4vh',
    '& label.Mui-focused': {
      color: '#14AFF1',
      padding: '2px',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0ba1e0',
      padding: '2px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#14AFF1',
        padding: '2px',
        height: '4vh',
      },
      '&:hover fieldset': {
        borderColor: '#14AFF1',
        padding: '2px',
        height: '4vh',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#14AFF1',
        padding: '2px',
        height: '4vh',
      },
    },
  },
})(TextField);

const CssBigTextField = withStyles({
  root: {
    background: '#283A46',
    padding: '0px',
    height: '8vh',
    '& label.Mui-focused': {
      color: '#14AFF1',
      padding: '2px',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0ba1e0',
      padding: '2px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#14AFF1',
        padding: '2px',
        height: '8vh',
      },
      '&:hover fieldset': {
        borderColor: '#14AFF1',
        padding: '2px',
        height: '8vh',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#14AFF1',
        padding: '2px',
        height: '8vh',
      },
    },
  },
})(TextField);

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    background: '#273D49CC',
    color: 'white'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: '#273D49CC',
    color: 'white'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    background: '#273D49CC'
  },
}))(MuiDialogActions);


const useStyles = makeStyles(theme =>({
    paper:{
      backgroundColor: '#273D49CC',
      borderTopLeftRadius:'1vh',
      borderTopRightRadius:'1vh',
      borderBottomLeftRadius:'0vh',
      borderBottomRightRadius:'0vh',
      display:'flex',
      width:'97vw',
      marginLeft:'2vh'
    },
    paper1:{
      backgroundColor: '#273D49CC',
      borderTopLeftRadius:'0vh',
      borderTopRightRadius:'0vh',
      borderBottomLeftRadius:'1vh',
      borderBottomRightRadius:'1vh',
      display:'flex',
      width:'97vw',
      marginLeft:'2vh',
      align:'center',
      color: 'white'
    },
    grid:{
      backgroundColor:'#39495E',
      height: '100%',
      width: '100%',
      margin: '0',
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
    margin: {
      margin: theme.spacing(1),
    },
        
}));
export default function Bodybuttons(props)
{
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [selectedDate, handleDateChange] = React.useState(new Date());

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

    const classes=useStyles();
    return(
        <Grid container spacing={0} className={classes.grid}>
            <Grid item xs={12}>
             <Paper elevation={0} className={classes.paper}>
               <Button elevation={0} className={classes.button1}>Predict</Button>
               <Button variant="outlined" elevation={0} color="primary" className={classes.button2}>View Correspondence</Button>
               <Button variant="outlined" elevation={0} color="primary" className={classes.button3} onClick={handleClickOpenAdd}>+ Add</Button>
               <Button variant="outlined" elevation={0} color="primary" className={classes.button2}>
                  <img src={edit} style={{marginRight:'0.4vh'}}></img>
                   Edit
               </Button>
               <Button variant="outlined" elevation={0} color="primary" className={classes.button2} onClick={handleClickOpen}>- Delete</Button>

              <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Delete record(s)?
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                  You'll lose your record(s) after this action. We can't recover them once you delete.
                  </Typography>
                  <Typography gutterBottom>
                  Are you sure you want to <span style={{color: '#FF7F50'}}><b>permanently delete</b></span> them?
                  </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} variant="outlined" color="primary" style={{height: '4vh', color: 'white'}}>
                    Cancel
                  </Button>
                  <Button autoFocus onClick={handleClose} className={classes.button1}>
                    Delete
                  </Button>
                </DialogActions>
            </Dialog>


            <Dialog onClose={handleCloseAdd} aria-labelledby="customized-dialog-title" open={openAdd} maxWidth={'lg'}>
                <DialogTitle id="customized-dialog-title" onClose={handleCloseAdd}>
                Add Invoice
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterLeft>
                  <form noValidate autoComplete="off">
                    <span>Customer Name <span style={{color: '#FF7F50'}}>*</span></span>
                    <CssTextField
                    className={classes.margin}
                    variant="outlined"
                    id="custom-css-outlined-input"
                    size="small" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Due Date <span style={{color: '#FF7F50'}}>*</span></span>
                    <CssTextField
                    className={classes.margin}
                    variant="outlined"
                    id="custom-css-outlined-input"
                    size="small" />

                    <br />
                    <span>Customer No. <span style={{color: '#FF7F50'}}>*</span></span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <CssTextField
                    className={classes.margin}
                    variant="outlined"
                    id="custom-css-outlined-input"
                    size="small" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Notes </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CssBigTextField 
                    className={classes.margin}
                    variant="outlined"
                    id="custom-css-outlined-input"
                    size="small" />
                    <br />
                    <span>Invoice No. <span style={{color: '#FF7F50'}}>*</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CssTextField
                    className={classes.margin}
                    variant="outlined"
                    id="custom-css-outlined-input"
                    size="small" />
                    <br />
                    <span>Invoice Amount <span style={{color: '#FF7F50'}}>*</span></span>
                    <CssTextField
                    className={classes.margin}
                    variant="outlined"
                    id="custom-css-outlined-input"
                    size="small" />
                    
                    
                  </form>
                  </Typography>
                  <Typography gutterRight>
                  </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} style={{height: '4vh', color: '#14AFF1'}}>
                    Cancel
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button autoFocus onClick={handleClose} variant="outlined" color="primary" style={{height: '4vh', color: 'white'}}>
                    Clear
                  </Button>
                  <Button autoFocus onClick={handleClose} className={classes.button1}>
                    Add
                  </Button>
                </DialogActions>
            </Dialog>
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

