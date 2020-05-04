import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import history from '../../history';
import {fetchLogin} from '../../actions'


class UserEdit extends React.Component{

  componentDidMount() {
    this.auth.isSignedIn.listen(this.onAuthChange);
  }


  renderCreate(){
    if(this.props.isSignedIn){
      return (
        <div>
        <p> {this.props.name}</p>
        <p> {this.props.email} </p>
        </div>
      );
    }else{
      history.push('/users/login')
    }
  }

  render(){
    return(
      <div>
        <h2> User Home </h2>
        <div> {this.renderCreate()} </div>
      </div>
    );
  }
}



export default UserEdit;
