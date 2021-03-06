import React, { useState, useContext, useCallback } from 'react';
import {Link} from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { GlobalContext } from '../../context/GlobalState';
import ErrorIcon from '@material-ui/icons/Error';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginBottom: "30px",
    marginTop:"40px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  wrapper: {
    display:"flex",
    alignItems: "baseline",
    justifyContent: "space-between"
  },
  errorMsgWrapper: {
    display:"flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "14rem",
    fontFamily:"Poppins, sans-serif"
  },
  addIconStyles: {
    backgroundColor:'#b71515',
    color:"#fff",
    float:"right",
    '&:hover': {
      backgroundColor: '#e11c1b',
     }
  },
  links:{
    margin:"0px",
    padding:"0px",
    color:"#fff"
  }
}));


export default function SearchTerm({error}) {

  const classes = useStyles();
  const { searchTerm } = useContext(GlobalContext)
  const [search, setSearch] = useState('');



const onSearchChange  = useCallback((event)=>{
setSearch(event.target.value);
  },[]);


const onSubmit = (e) => {
    e.preventDefault();
    
    searchTerm(search);
 
}

  return (
    <div className={classes.wrapper}>
      <Paper component="form" className={classes.root}  onSubmit={onSubmit}>
        <InputBase
          className={classes.input}
          placeholder="Search Term"
          onChange = { onSearchChange }
          inputProps={{ 'aria-label': 'search term' }}
          required
        />
        <IconButton 
          type="submit" 
          
          className={classes.iconButton} 
          aria-label="search">

          <SearchIcon />
        </IconButton>
      </Paper>

   

      <div className={classes.errorMsgWrapper}>
        {error !== null && error.length !== 0 ? <ErrorIcon color="error"/> : null}
          <span>
            {error}
          </span>
        </div>

        <Link className={classes.links} to="/terms/add"><Fab className={classes.addIconStyles} size="small" aria-label="add">
        <AddIcon />
      </Fab></Link>
    </div>
  );
}