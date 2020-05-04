import {
  SIGN_IN,SIGN_OUT,
  LOGGED_FAILED,
  REGISTER,
  REGISTER_FAILED,
  ACCESS,
  LOADING,
  TERMINATE
} from '../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  token: null,
  signInErrorMessage: null,
  registerErrorMessage: null,
  loading: null
}

export default (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case LOADING:
      return {...state, isSignedIn: false, token: null, signInErrorMessage:null, registerErrorMessage: null, loading: true };
    case TERMINATE:
      return {...state, loading: null};
    case SIGN_IN:
      return {
        ...state,
         isSignedIn: true,
         token: action.payload,
         signInErrorMessage: null,
         registerErrorMessage: null
        };
    case SIGN_OUT:
      return {...state, isSignedIn: false, token: null, signInErrorMessage:null, registerErrorMessage: null };
    case LOGGED_FAILED:
      return {...state, isSignedIn: false, token: null, signInErrorMessage: action.payload};
    case REGISTER_FAILED:
      return {...state, isSignedIn: false, token: null, registerErrorMessage: action.payload};
    default:
      return state;

  }
}
