import {
  ACCESS,
  UNACCESS
} from '../actions/types'

const INITIAL_STATE = {
  email: null,
  isAdmin: null,
  isEmployee: null,
  name: null,
  userId: null
}

export default (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case ACCESS:
      return{
        ...state,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        isEmployee: action.payload.isEmployee,
        name: action.payload.name,
        userId: action.payload._id
      };
    case UNACCESS:
      return{
        ...state,
        email: null,
        isAdmin: null,
        isEmployee: null,
        name: null,
        userId: null
      }
    default:
      return state

  }
}
