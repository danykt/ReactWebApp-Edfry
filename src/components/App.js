import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import UserRegister from "./users/UserRegister";
import UserEdit from "./users/UserEdit";
import UserDelete from "./users/UserDelete";
import UserList from "./users/UserList";
import UserShow from "./users/UserShow";
import UserLogin from "./users/UserLogin";
import AdressList from "./adress/AdressList";
import AdressForm from './adress/AdressForm';
import Header from './Header';
import history from '../history';
import AdressCreate from './adress/AdressCreate'
import LocationSearchInput from './adress/LocationSearchInput';
import GoogleSuggest from './adress/GoogleSuggest';


const App = () => {
  return(
    <div className = "ui container">
      <Router history={history}>
        <div>
          <Header/>
          <Route path ="/:id" exact component={UserList} />
          <Route path= "/adress/create" exact component={AdressCreate} />
          <Route path= "/adress/suggest" exact component={GoogleSuggest} />
          <Route path="/myadresses/:token" exact component= {AdressList} />
          <Route path="/users/login" exact component={UserLogin} />
          <Route path="/users/new" exact component={UserRegister} />
          <Route path="/users/edit" exact component={UserEdit} />
          <Route path="/users/delete" exact component={UserDelete} />
          <Route path="/users" exact component={UserShow} />
        </div>
      </Router>
    </div>

  );
}

export default App;
