import React from 'react';
import {connect} from 'react-redux';
import {fetchRegister} from '../../actions'
import RegisterForm from '../forms/RegisterForm';
import Spinner from  '../Spinner';
import Error from '../Error';

class UserRegister extends React.Component{
  onSubmit = (formValues) => {
    this.props.fetchRegister(formValues);
  }
  render(){
    const {registerErrorMessage} = this.props;
    const {loading} = this.props;
      return(
        <div>
          <h3> User Login </h3>
          {registerErrorMessage ?
              <Error label={registerErrorMessage.data} />
             : null
           }
           {loading ?
             <Spinner label= "Registering.." />
            : null
           }
          <RegisterForm onSubmit={this.onSubmit} />
        </div>
      );
    
  }
}

const mapStateToProps = (state) => {
  return {
    registerErrorMessage: state.auth.registerErrorMessage,
    loading: state.auth.loading,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {fetchRegister})(UserRegister);
