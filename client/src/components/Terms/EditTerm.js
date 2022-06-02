import React, { useState,useContext} from 'react';
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
    color:"#fff",'&:hover': {
      backgroundColor:  "#e11c1b"
   }

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


export default function EditTerm(props) {

  const classes = useStyles();
  const { editTerm, singleTerm } = useContext(GlobalContext)
  const [abbreviation, setAbbreviation] = useState(singleTerm.abbreviation);
  const [definition, setDefinition] = useState(singleTerm.definition);

  const updateAbbreviation = e => {
    setAbbreviation(e.target.value);
  }

  const updateDefinition = e => {
    setDefinition(e.target.value);
  }

  const homePage = () => {
    window.open("/", "_self")
  }

  //Handle submit
  const handleSubmit = e => {
    e.preventDefault();
    const id = props.history.location.search.substring(1);
    const newTerm = {
      abbreviation: abbreviation,
      definition: definition,
      id: id
    }

    editTerm(newTerm);
      window.open("/", "_self")
  }
  


  return (
    <div className={classes.root}>
     
        <div className={classes.formWrapper}>
        <ArrowBackIcon onClick={homePage} className={classes.actionIcon}/>
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
            value={abbreviation}
            required
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
                value={definition}
                required
                />
                <Button 
                variant="contained" 
                type="submit"
                    className={classes.formBtn}
                >
                  Edit Term
                 </Button>
          </form>
        </div>
     </div>
  );
}