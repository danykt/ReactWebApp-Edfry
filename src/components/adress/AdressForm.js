import React from 'react';
import {Field, reduxForm} from 'redux-form';
import history from '../../history';
import {connect} from 'react-redux';
import {adressSelect} from '../../actions/adress';



class AdressForm extends React.Component{


  renderError({error, touched}){
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header"> {error} </div>
        </div>
      );
    }
  }

  // renderInput = ({input, placeholder, meta}) => {
  //   const className = `field ${meta.error && meta.touched ? 'error': ''}`
  //   return(
  //     <div className={className}>
  //       <input {...input} placeholder={placeholder} autoComplete="off" type="text"/>
  //       {this.renderError(meta)}
  //     </div>
  //   );
  // }
   //
   // renderDropdownList = ({ input, data, valueField, textField }) =>{
   //   return(
   //     <DropdownList {...input}
   //       data={data}
   //       valueField={valueField}
   //       textField={textField}
   //       onChange={input.onChange} />
   //     );
   // }




  render(){
    return (

    <form className="ui form error" >
      <h4 className="ui dividing header">Adress Form</h4>

      <div className="field">
        <label>Street Adress</label>
        <div className="fields">
          <div className="twelve wide field">
            <input
              name="adress"
              placeholder="Street Adress"
              value={this.props.selectedStreet}
            />
          </div>
          <div className="four wide field">
            <input
            name="zipcode"
            placeholder="zipcode"
            value={this.props.selectedZipAdress}
            />
          </div>
        </div>
      </div>
      <div className="two fields">
          <div className="field">
            <label>City</label>
            <input
             name="city"
             value={this.props.selectedCity}
             textField="city"
             />
          </div>
          <div className="field">
            <label>State</label>
            <input
             name="state"
             value={this.props.selectedState}
             textField="city"
             />
          </div>


      </div>
    </form>


  );
  }


}

const mapStateToProps = state =>{
  return{
    isSignedIn: state.auth.isSignedIn,
    selectedStreet: state.adresses.selectedStreetAdress,
    selectedCity: state.adresses.selectedCityAdress,
    selectedZipAdress: state.adresses.selectedZipAdress,
    selectedState: state.adresses.selectedStateAdress
  }
}


export default connect(mapStateToProps, {adressSelect})(AdressForm);
