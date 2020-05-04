import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import userInfoReducer from './infoReducer';
import adressReducer from './adressReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  userInfo: userInfoReducer,
  adresses: adressReducer
});
