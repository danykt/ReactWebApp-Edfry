import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import history from '../../history';
import {fetchLogin,fetchUserInfo} from '../../actions'


class UserList extends React.Component{

  componentDidMount() {
    this.props.fetchUserInfo(this.props.match.params.id);
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
        <h2> Edit List </h2>
        <div> {this.renderCreate()} </div>
      </div>
    );
  }
}

const mapStateToProps =(state) =>{
  return {
    isSignedIn: state.auth.isSignedIn,
    name: state.userInfo.name,
    email: state.userInfo.email
  }
}


export default connect(mapStateToProps,{fetchUserInfo})(UserList);
