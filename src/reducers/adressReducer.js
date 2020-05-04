import _ from 'lodash';
import {
  FETCH_USER_ADRESSES,
  SELECT_ADRESS,
  FETCHING,
  DONE
} from '../actions/types'
const INITIAL_STATE = {
  userAdresses: {},
  selectedStreetAdress: null,
  selectedStateAdress: null,
  selectedCityAdress: null,
  selectedZipAdress: null,
  isAdressSelected: false,
  fetching: false
}

export default (state = {}, action) =>{
  switch (action.type) {
    case FETCH_USER_ADRESSES:
      return Object.assign({}, state,{
        userAdresses: action.payload
      })
    case SELECT_ADRESS:
      return{...state,
        selectedStreetAdress: action.payload.adress,
        selectedStateAdress: action.payload.state,
        selectedZipAdress: action.payload.zip,
        selectedCityAdress: action.payload.city,
        isAdressSelected: true
      }
    case FETCHING:
      return{...state, fetching: true}

    case DONE:
      return {...state, fetching: false}
    default:
      return state
  }
}
