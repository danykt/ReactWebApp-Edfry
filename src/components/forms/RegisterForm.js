import React from 'react';
import {Field, reduxForm} from 'redux-form';

class RegisterForm extends React.Component{
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
  render(){
  //  const {errorMessage} = this.props;
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="name" type = "text" component={this.renderInput} label="Enter full name" />
          <Field name="email" type = "email" component={this.renderInput} label="Enter email" />
          <Field name="password" type = "password" component={this.renderInput} label="Enter Password"/>
          <Field name="passwordConfirm" type = "password" component={this.renderInput} label="Enter Password"/>
          <button className = "ui button primary"> Submit </button>
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
  if(formValues.password != formValues.passwordConfirm){
    errors.passwordConfirm = 'Password need to match to register'
  }
  return errors;
};

export default reduxForm({
  form: 'registerForm',
  validate: validate
})(RegisterForm);
