import{
  FETCH_USER_ADRESSES,
  SELECT_ADRESS,
  SAVE_ADRESS,
  FETCHING,
  DONE,
  DELETE_ADRESS
} from './types';
import auth from '../apis/auth';
import history from '../history';
import _ from 'lodash';



export const deleteAdress = (token, id) => async dispatch =>{
  dispatch({type: FETCHING});
  const response = await auth.delete(`adress/${id}`, {
    headers:{
      'x-auth-token': token
    }
  })
  .then((res) =>{
    //await this.fetchUserAdresses(token);
    console.log(res.data);
  })
  .catch(function (error){
    console.log(error.data)
  });
  dispatch({type: DONE})
}
export const saveAdress = (token, values) => async dispatch=>{
  dispatch({type: FETCHING});
  const response = await auth.post('adress', values, {
    headers:{
      'x-auth-token': token
    }
  })
  .then((res) =>{
    //await this.fetchUserAdresses(token);
    console.log(res.data);
  })
  .catch(function (error){
    console.log(error.data)
  });
  dispatch({type: DONE})
}

export const adressSelect = (adressArr) => async dispatch =>{
  var adressObj = {
    adress: adressArr[0].long_name + " " + adressArr[1].long_name,
    city: adressArr[3].long_name,
    state: adressArr[5].long_name,
    country: adressArr[6].long_name,
    zip: adressArr[7].long_name
  };

  dispatch({type: SELECT_ADRESS, payload: adressObj});




}

export const selectAdress = (rawAdress) => async dispatch =>{
  var adressArr = rawAdress.split(',');
  var adressObj = {
    adress: adressArr[0],
    city: adressArr[1],
    state: adressArr[2],
    country: adressArr[3]
  };

  dispatch({type: SELECT_ADRESS, payload: adressObj});

}


export const fetchUserAdresses = (token) => async dispatch =>{
  const response = await auth.get('adress/myadresses',{
    headers:{
      'x-auth-token': token
    }
  })
  .then((res) =>{
    dispatch({type: FETCH_USER_ADRESSES, payload: res.data});
  })
  .catch(function (error){
    console.log(error.data)
  });

}
