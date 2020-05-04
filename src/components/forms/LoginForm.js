import React from 'react';
import {Field, reduxForm} from 'redux-form';
import history from '../../history'

class LoginForm extends React.Component{
  renderError({error, touched}){
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error} </div>
        </div>
      );
    }
  }
  renderInput = ({input, label, meta, type}) => {
    const className = `field ${meta.error && meta.touched ? 'error':''}`
    return (
      <div className={className}>
        <label> {label} </label>
        <input type={type} {...input} autoComplete = "off" />
        {this.renderError(meta)}
      </div>
    );
  }
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }
  onRegister = () =>{
    history.push('/users/new')
  }
  render(){
  //  const {errorMessage} = this.props;
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="email" type = "text" component={this.renderInput} label="Enter email" />
          <Field name="password" type = "password" component={this.renderInput} label="Enter Password"/>
          <button className = "ui button primary"> LOGIN </button>
          <button className = "ui button" onClick={this.onRegister}> REGISTER </button>
        </form>
    )
  }
}



const validate = (formValues) => {
  const errors = {};
  if(!formValues.email){
    errors.title= 'You must enter email';
  }
  if(!formValues.password){
    errors.password = 'You must enter a password';
  }
  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate: validate
})(LoginForm);
