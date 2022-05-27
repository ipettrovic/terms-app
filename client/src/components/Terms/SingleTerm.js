import React, { useState, useEffect, useContext } from 'react';
import useStyles from '../../styles';
import { GlobalContext } from '../../context/GlobalState';
import SingleTermDetails from './SingleTermDetails';

import ReceiptIcon from '@material-ui/icons/Receipt';


const SingleTerm = (props) => {
    const classes = useStyles();
    const { singleTerm, getSingleTerm } = useContext(GlobalContext);
    const id = props.match.params.id;

    useEffect(()=>{
        getSingleTerm(id);

    },[])


    return(
        <div className={classes.singleHookWrapper}>
          
           <h3 className={classes.headings}> <ReceiptIcon color="primary"/>  Term: {singleTerm.abbreviation}</h3>
            {singleTerm === undefined || singleTerm === null ? "Loading" : 
                <>
                 <div className="container">
                    <div className="row justify-content-center">
                        <SingleTermDetails terms={singleTerm}/>
                    </div>
                </div>
                </>}
        </div>
    )
}

export default SingleTerm;