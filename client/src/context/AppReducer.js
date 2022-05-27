export default (state, action) => {
  switch (action.type) {
    case "GET_ALL_TERMS_SUCCESS":
      return {
        ...state,
        terms: action.payload
      }
    case "GET_ALL_TERMS_ERROR":
      return {
        ...state,
        error: 'Something went wrong'
      }

    case "GET_SINGLE_TERM_SUCCESS":
      return {
        ...state,
        singleTerm: action.payload
      }

    case "GET_SINGLE_TERM_ERROR":
      return {
        ...state,
        error:"Failed to fetch the term!"
      }
    case "DELETE_TERM_SUCCESS":
      return {
        ...state,
        terms: state.terms.filter(term => term._id !== action.payload)
      }
    case "DELETE_TERM_ERROR": 

    return {
      ...state,
        error: action.payload
    }
    
    case "ADD_TERM":
      return {
        ...state,
        terms: [...state.terms, action.payload]
      }
    

    case "SEARCH_TERM_SUCCESS":
      return {
        ...state,
        
        searchTermResult: [action.payload],
        searchTermResultError: null
      }
    case "SEARCH_TERM_ERROR":
      return {
        ...state,
        searchTermResult: null,
        searchTermResultError: "Term was not found!"
      }
    case "ADD_TERM_SUCCESS": 
      return {
        ...state,
          terms: [...state.terms, action.payload]
      }
    case "ADD_TERM_ERROR": 
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}