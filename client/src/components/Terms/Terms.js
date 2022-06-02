import React, {  useEffect, useContext, useState } from 'react';
import useStyles from '../../styles';

import { Container,  Grow, Grid } from "@material-ui/core";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TermsDisclaimer from './TermsDisclaimer';

import SearchTerm from './SearchTerm';

import { GlobalContext } from '../../context/GlobalState';

const Terms = (props) => {
    const { terms, getTerms, searchTermResult, searchTermResultError } = useContext(GlobalContext)
    const classes = useStyles();

   
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(()=>{
        getTerms();
    },[])


    
    const columns = [
        { id: 'abbreviation', label: 'Term/Abbreviation', minWidth: 170 },
        { id: 'definition', label: 'Definition', minWidth: 100 },
      ];

    // Column creator end

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };

    const loadDetails = (id) => {
        props.history.push(`/terms/${id}`)
    }

    const termsList = () =>{
        if(terms.length === 0 || terms === null){
            return null
        } else { 
            return(
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table" size="small">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth, fontWeight:"bold" }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {terms.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((term) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={term._id}>
                                {columns.map((column) => {
                                    const value = term[column.id];
                                    return (
                                    <TableCell className = {classes.termsCell} key={column.id} align={column.align} onClick = {() => loadDetails(term._id)}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100, 200, 500]}
                        component="div"
                        count={terms.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>     
            )
        }
    }

    const searchResult = () =>{
            return(
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table" size="small">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth, fontWeight:"bold" }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {searchTermResult.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((term) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={term._id}>
                                {columns.map((column) => {
                                    const value = term[column.id];
                                    return (
                                    <TableCell className = {classes.termsCell} key={column.id} align={column.align} onClick = {() => loadDetails(term._id)}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100, 200, 500]}
                        component="div"
                        count={searchTermResult.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>     
            )
        
    }

    return(
        <>
            <Container maxwidth="lg" className = {classes.TermsContainer}> 
                <Grow in> 
                    <Container>
                        <TermsDisclaimer />
                    <SearchTerm error={searchTermResultError}/>
                        <Grid container justify ="space-between" alignItems="stretch" spacing={3} >
                            <Grid item xs={12} sm={12} lg={12}>
                                {searchTermResult !== null && searchTermResult.length !== 0  ? searchResult() : termsList()}
                                
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
                
            </Container>
            
            <p className={classes.author}>2022 © Marko Medik </p>
        </>
    )
}

export default Terms;