import React, { useState, useEffect, useContext, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { GlobalContext } from '../../context/GlobalState';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    marginBottom: "30px",
    marginTop:"100px"
  },
  formWrapper:{
      width:"70%",
      margin: "0 auto",
     /* backgroundColor:"green"*/
     
  },
  mainForm: {
    display:"flex",
    flexDirection:"column"
  },
  textArea: {
      marginTop: "20px"
  },
  formBtn: {
    marginTop: "20px",
    backgroundColor:'#00695c',
    color:"#fff"
  }
  
}));


export default function AddTerm(props) {

  const classes = useStyles();
  const { addTerm } = useContext(GlobalContext)
  const [abbreviation, setAbbreviation] = useState('');
  const [definition, setDefinition] = useState('');

  const updateAbbreviation = e => {
    setAbbreviation(e.target.value);
  }

  const updateDefinition = e => {
    setDefinition(e.target.value);
  }

  //Handle submit
  const handleSubmit = e => {
    e.preventDefault();

    const newTerm = {
      abbreviation: abbreviation,
      definition: definition
    }

    addTerm(newTerm);
     props.history.push('/')
     console.log('Form submitted');
  }



  return (
    <div className={classes.root}>
     
        <div className={classes.formWrapper}>
        <form  
        className={classes.mainForm} 
        autoComplete="off"
        onSubmit={handleSubmit}
        >
           
            <TextField 
            id="outlined-basic" 
            label="Abbreviation"
            variant="outlined" 
            onChange={updateAbbreviation}
            required
            />
          
            <TextField
                id="outlined-multiline-static"
                label="Enter definition"
                multiline
                rows={10}
                onChange={updateDefinition}
                maxRows={50}
                variant="outlined"
                className={classes.textArea}
                required
                />
                <Button 
                variant="contained" 
                type="submit"
                    className={classes.formBtn}
                >
                  Add Term
                 </Button>
          </form>
        </div>
     </div>
  );
}