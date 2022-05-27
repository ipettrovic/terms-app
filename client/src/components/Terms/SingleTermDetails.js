import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { GlobalContext } from '../../context/GlobalState';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
      width: "50%",
      margin: "100px auto 0 auto"
  },
  menuWrapper:{
    display:"flex",
    alignItems:"center",
    margin:"10px"
  },
  downloadWrapper: {
    display:"flex",
    width: "5.8rem",
    alignItems:"center",
    justifyContent:"space-between",
    margin:"3px auto 0 auto",
    cursor:"pointer",
    color:"#3F51B5",
    '&:hover': {
      color: "1b2a72"
   }
  }

});

function createData(variables, values) {
  return { variables, values };
}

export default function SingleTermDetails({ terms }) {
  const classes = useStyles();
  const rows = Object.entries(terms).map(([key, val]) => createData(key, val));


  let history = useHistory();
  const goBack = () => {
    history.push('/')
  }

  return (
    <div >
     
    <TableContainer component={Paper} className={classes.root}>
      <div className={classes.menuWrapper}>
        <ArrowBackIcon  color="primary"  cursor="pointer" onClick={goBack}/>
            
        </div>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Variables</TableCell>
            <TableCell align="right">Values </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.variables}>
              <TableCell component="th" scope="row">
                {row.variables}
              </TableCell>
             
              <TableCell align="right">{row.values}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
