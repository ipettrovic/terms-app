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
    
    case "EDIT_TERM_SUCCESS":
      return {
        ...state,
       terms: [...state.terms]
      }

    case "EDIT_TERM_ERROR":
    return {
      ...state,
      error: action.payload
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
          terms: [...state.terms, action.payload],
          addNotification: "Term added successfully! ✔",
          errorOnAdd: false
      }
    case "ADD_TERM_ERROR": 
      return {
        ...state,
        addNotification: action.payload,
        errorOnAdd: true
      }
    case "RESET_NOTIFICATION": 
    return {
      ...state,
      addNotification: null
    }
      
    default:
      return state;
  }
}