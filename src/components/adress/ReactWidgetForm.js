import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'

import 'react-widgets/dist/css/react-widgets.css';

const renderError = ({error, touched}) =>{
  if(touched && error){
    return(
      <div className="ui error message">
        <div className="header"> {error} </div>
      </div>
    );
  }
}
const renderInput = ({input, placeholder, meta}) => {
  const className = `field ${meta.error && meta.touched ? 'error': ''}`
  return(
    <div className={className}>
      <input {...input} placeholder={placeholder} autoComplete="off" type="text"/>
      {renderError(meta)}
    </div>
  );
}

const cities = [ "Seattle", "Lynwood", "Everett" ]

const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />



let ReactWidgetsForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>


      <div>
        <label>Street Adress</label>
        <Field name="adress" component={renderInput} placeholder="Street Adress"/>

      </div>
      <div>
        <label>Zipcode</label>
        <Field name="zipcode" component={renderInput} placeholder="zipcode"/>

      </div>
      <div>
        <label>Favorite Color</label>
        <Field
          name="city"
          component={renderDropdownList}
          data={cities}
          valueField="value"
          textField="color"/>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
        </button>
      </div>
    </form>
  )
}

ReactWidgetsForm = reduxForm({
  form: 'reactWidgets'  // a unique identifier for this form
})(ReactWidgetsForm)

export default ReactWidgetsForm
