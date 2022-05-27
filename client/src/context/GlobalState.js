import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import axios from 'axios';

//Initial state
const initialState = {
  terms: [],
  singleTerm: [],
  searchTermResult: [],
  searchTermResultError: []
}

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  async function getTerms() {
    try {
      const res = await axios.get('/api/v1/terms');
      dispatch({
        type: 'GET_ALL_TERMS_SUCCESS',
        payload: res.data.data
      });

    } catch (err) {
      dispatch({
        type: 'GET_ALL_TERMS_ERROR',
        payload: err.response.data.error
      });
    }
  }
  //Get single term
  async function getSingleTerm(id) {
    const config = {
      headers: {

        "Content-Type": "application/json"
      }
    }
    try {
      const res = await axios.get(`/api/v1/terms/${id}`, config);
      dispatch({
        type: 'GET_SINGLE_TERM_SUCCESS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'GET_SINGLE_TERM_ERROR',
        payload: err.response.data.error
      });
    }
  }

  //Add term
  async function addTerm(term) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

    try {
      const res = await axios.post('/api/v1/terms', term, config);
      dispatch({
        type: 'ADD_TERM_SUCCESS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'ADD_TERM_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteTerm(id) {
    
    
    try {
      await axios.delete(`/api/v1/terms/${id}`);
      dispatch({
        type: 'DELETE_TERM_SUCCESS',
        payload: id,
        msg:"Term deleted successfully"
      });

    } catch (err) {
      dispatch({
        type: 'DELETE_TERM_ERROR',
        payload: err.response.data.error
      });
    }
  }

  
  //Search for the specific term 
  async function searchTerm(term) {
    try {
      const res = await axios.get(`/api/v1/terms/term/${term}`);
      dispatch({
        type: 'SEARCH_TERM_SUCCESS',
        payload: res.data.data
      });

    } catch (err) {
      dispatch({
        type: 'SEARCH_TERM_ERROR',
        payload: err
      });
    }
  }
  //Terms actions end
  //********************************//

  return (<GlobalContext.Provider value={{
    terms: state.terms,
    singleTerm: state.singleTerm,
    searchTermResult: state.searchTermResult,
    searchTermResultError: state.searchTermResultError,
    getTerms,
    getSingleTerm,
    searchTerm,
    addTerm,
    deleteTerm
  }}>
    {children}
  </GlobalContext.Provider >);
}