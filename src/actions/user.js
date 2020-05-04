import{
  FETCH_USER
} from './types';
import auth from '../apis/auth';
import history from '../history';
import _ from 'lodash';





export const fetchLogin = formValues => async (dispatch, getState) =>{
 auth.post('/auth', formValues)
  .then((res) => {
    dispatch({type: SIGN_IN, payload: res.data}) // save token
    return auth.get('/users/me',{
      headers:{
        'x-auth-token': res.data
      }
    });
  })
  .then((res) => {
    dispatch({type: ACCESS, payload: res.data}) // save user data
    history.push('/')
  })
  .catch(function (error){
    dispatch({type: LOGGED_FAILED, payload: error.response})
  });

}




export const fetchRegister = formValues => async (dispatch, getState) =>{
  delete formValues.passwordConfirm;
  console.log(formValues);

  const response = await auth.post('/users', formValues)
    .then((res) => {
      delete formValues.name;
      return auth.post('/auth', formValues)
    })
    .then((res) => {
      console.log(res.data);
      dispatch({type: SIGN_IN, payload: res.data}) // save token
      return auth.get('/users/me',{
        headers:{
          'x-auth-token': res.data
        }
      });
    })
    .then((res) => {
      dispatch({type: ACCESS, payload: res.data}) // save user data
      history.push('/')
    })

}
