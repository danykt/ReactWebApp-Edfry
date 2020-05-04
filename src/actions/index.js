import{
  SIGN_IN,
  SIGN_OUT,
  LOGGED_FAILED,
  REGISTER,
  REGISTER_FAILED,
  ACCESS,
  UNACCESS,
  LOADING,
  TERMINATE
} from './types';
import auth from '../apis/auth';
import history from '../history';
import _ from 'lodash';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => async dispatch =>{
  dispatch({type: SIGN_OUT});
  dispatch({type: UNACCESS});
  history.push('/users/login');
};

export const fetchLogin = formValues => async (dispatch, getState) =>{
 dispatch({type: LOADING});
 const response = await auth.post('/auth', formValues)
  .then((res) => {
    dispatch({type: SIGN_IN, payload: res.data}) // save token
    history.push(`/${res.data}`);
  })
  .catch(function (error){
    dispatch({type: LOGGED_FAILED, payload: error.response})
  });
  dispatch({type: TERMINATE});

}

export const fetchUserInfo = (token) => async dispatch =>{
  const response = await auth.get('/users/me',{
        headers:{
          'x-auth-token': token
        }
      })
      .then((res) =>{
        dispatch({type: ACCESS, payload: res.data})
      });

}





export const fetchRegister = formValues => async (dispatch, getState) =>{
  delete formValues.passwordConfirm;

  dispatch({type: LOADING})

  const response = await auth.post('/users', formValues)
    .then((res) => {
      delete formValues.name;
      console.log(formValues);
      return auth.post('/auth', formValues)
    })
    .then((res) => {
      dispatch({type: SIGN_IN, payload: res.data}) // save token
      history.push(`/${res.data}`);

    })
    .catch(function (error){
      console.log(error.response);
      dispatch({type: REGISTER_FAILED, payload: error.response});

    });

    dispatch({type: TERMINATE})


}
