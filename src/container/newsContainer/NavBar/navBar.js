import React, {useState}from 'react';
import {Button, AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    typoStyle: {
      flexGrow:1
    },
  }));

const Navbar=()=> {

const classes = useStyles();

  return (
    <AppBar >
      <Toolbar>
        <Typography variant="h6"  className={classes.typoStyle}>
          The TIMES NEWS
        </Typography>
        <Button color="inherit"  href="/login" >Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;