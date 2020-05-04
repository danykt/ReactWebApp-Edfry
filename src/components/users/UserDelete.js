import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import history from '../../history';

class UserDelete extends React.Component{


  renderCreate(){
    if(this.props.isSignedIn){
      return (
        <p> You are login you are able to delete users </p>
      );
    }else{
      history.push('/users/login')
    }
  }

  render(){
    return(
      <div>
        <h2> Delete user </h2>
        <div> {this.renderCreate()} </div>
      </div>
    );
  }
}


export default UserDelete;
