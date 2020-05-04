import axios from 'axios';

export default axios.create({
  baseURL: 'https://edfry.herokuapp.com/api'
});
