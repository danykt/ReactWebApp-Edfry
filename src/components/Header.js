import React from 'react';
import {Link} from 'react-router-dom';
import Auth from './Auth';
import {connect} from 'react-redux';
import history from '../history';

class Header extends React.Component{

  render(){
    if(this.props.isSignedIn){
        return(
            <div className="ui secondary pointing menu">
              <Link to="/" className="item">
                Edfry Delivery
              </Link>
              <div className="right menu">
                <Link to="/" className="item">
                  Home
                </Link>
                <Link to={`myadresses/${this.props.token}`} className="item">
                  My Adresses
                </Link>
                <Auth/>
              </div>
            </div>
          );

    }
    else{
      return(
          <div className="ui secondary pointing menu">
            <Link to="/" className="item">
              Edfry Delivery
            </Link>
            <div className="right menu">
              <Link to="/" className="item">
                Home
              </Link>
              <Auth/>
            </div>
          </div>
        );
    }
  }
}


const mapStateToProps = (state) =>{
  return{
    isSignedIn: state.auth.isSignedIn,
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Header);
