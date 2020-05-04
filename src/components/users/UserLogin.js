import React from 'react';
import {connect} from 'react-redux';
import {fetchLogin} from '../../actions'
import LoginForm from '../forms/LoginForm';
import Spinner from '../Spinner';
import Error from '../Error';

class UserLogin extends React.Component{
  onSubmit = (formValues) => {
    this.props.fetchLogin(formValues);
  }
  render(){
    const {signInErrorMessage, loading} = this.props;
    if(!this.props.isSignedIn){
    return(
        <div>
          <h3> User Login </h3>
          {signInErrorMessage ?
              <Error label={signInErrorMessage.data} />
             : null
           }
           {loading ?
             <Spinner label="Loading.." />
            : null
           }
          <LoginForm onSubmit={this.onSubmit} />
        </div>
      );
    }else{
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    signInErrorMessage: state.auth.signInErrorMessage,
    loading: state.auth.loading,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {fetchLogin})(UserLogin);
