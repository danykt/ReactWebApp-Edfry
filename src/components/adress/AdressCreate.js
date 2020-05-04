import React from 'react';
import {connect} from 'react-redux';
//import {createAdress} from '../../actions/adress';
import ReactWidgetsForm from './ReactWidgetForm';


class AdressCreate extends React.Component{
  onSubmit = (formValues) => {
    console.log(formValues);
  }

  render (){
    return (
      <div>
        <h3> Create an Adress </h3>
        <ReactWidgetsForm onSubmit={this.onSubmit} />
      </div>
    );
  }
};

export default connect(null)(AdressCreate);
