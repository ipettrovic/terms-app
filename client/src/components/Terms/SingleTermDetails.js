import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import EditIcon from '@material-ui/icons/Edit';

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
  editIconStyle: {
    color:"#b71515",
    cursor:"pointer",
    '&:hover': {
      color: "#e11c1b"
   }
  }

});

function createData(variables, values) {
  return { variables, values };
}

export default function SingleTermDetails({ terms}) {
  const classes = useStyles();
  const rows = Object.entries(terms).map(([key, val]) => createData(key, val));

  let history = useHistory();

  const termId = history.location.pathname.substring(7);


  const homePage = () => {
    window.open("/", "_self")
  }

  return (
    <div >
     
    <TableContainer component={Paper} className={classes.root}>
      <div className={classes.menuWrapper}>
        <ArrowBackIcon  color="primary"  cursor="pointer" onClick={homePage}/>
            
        </div>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"><Link to={`/terms/edit?${termId}`}><EditIcon className={classes.editIconStyle}/></Link> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.variables}>
              <TableCell component="th" scope="row">
                {row.variables}
              </TableCell>
             
              <TableCell align="left">{row.values}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
