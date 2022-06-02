import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
    backgroundColor:'#b71515',
    color:"#fff",
    '&:hover': {
      backgroundColor:  "#e11c1b"
   }
  },
  noteError: {
    marginBottom:"20px",
    fontSize:"16px",
    color:"#f20d0d"
  },
  noteSuccess: {
    marginBottom:"20px",
    fontSize:"16px",
    color:"#64dd17"
  },
  actionIcon: {
    marginBottom: "20px",
    color:'#b71515',
    cursor:"pointer",
    '&:hover': {
      color:  "#e11c1b"
   }
  }
  
}));


export default function AddTerm(props) {

  const classes = useStyles();
  const { addTerm, addNotification, errorOnAdd, resetNote } = useContext(GlobalContext)
  const [abbreviation, setAbbreviation] = useState('');
  const [definition, setDefinition] = useState('');

  const updateAbbreviation = e => {
    setAbbreviation(e.target.value);
  }

  const updateDefinition = e => {
    setDefinition(e.target.value);
  }

    useEffect(()=>{

  },[addNotification,abbreviation, definition])


  //Handle submit
  const handleSubmit = e => {
    e.preventDefault();

    const newTerm = {
      abbreviation: abbreviation,
      definition: definition
    }
    
    addTerm(newTerm);
    setTimeout(()=>{
      resetNote()
   
    }, 2000) //reset notification - success/error
  
  }

  
  const homePage = () => {
    window.open("/", "_self")
  }

  return (
    <div className={classes.root}>
        <div className={classes.formWrapper}>
        <ArrowBackIcon onClick={homePage} className={classes.actionIcon}/>
          <div  
          className={errorOnAdd ? classes.noteError : classes.noteSuccess}>
             <span>{addNotification}</span>   
            </div>
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
            className='abbreviation'
            />
          
            <TextField
                id="outlined-multiline-static"
                label="Enter definition"
                multiline
                rows={10}
                onChange={updateDefinition}
                maxrows={50}
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