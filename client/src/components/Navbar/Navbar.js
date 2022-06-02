import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from '../../styles';


export const Navbar = () => {
    const classes = useStyles();

const homePage = () => {
  window.open("/", "_self")
}

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar variant="dense">
      
          <Typography variant="h6" color="inherit">
            <span onClick={homePage} className={ classes.logo }><span className={classes.logoPartOne}>JAGGAER Vocabulary</span></span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

  )}

export default Navbar;