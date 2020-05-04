import React from 'react';
import {connect} from 'react-redux';
import {fetchLogin, signOut} from '../actions'


class Auth extends React.Component{



  onSignOutClick = () => {
    this.props.signOut();
  }

  renderAuthButton(){


      if(!this.props.isSignedIn || this.props.isSignedIn === null){
        return null;
      }
      else{
        return (
          <button onClick={this.onSignOutClick} className="ui blue google button">
            <i className = "truck icon"/>
            Sign out
          </button>
        );
      }


  }
  render(){
    return <div> {this.renderAuthButton()} </div>;
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {fetchLogin, signOut})(Auth);
