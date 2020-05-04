import React from 'react';
import {connect} from 'react-redux';
import {fetchUserAdresses, saveAdress, adressSelect, deleteAdress} from '../../actions/adress';
import {Link} from 'react-router-dom';
import history from '../../history';
import LocationSearchInput from './LocationSearchInput';
import AdressForm from './AdressForm';
import GoogleSuggest from './GoogleSuggest';
import Spinner from '../Spinner';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



class AdressList extends React.Component{
  componentDidMount(){
    if(this.props.isSignedIn){
      this.props.fetchUserAdresses(this.props.match.params.token);
    }
  }

  deleteAdress = async(id) =>{
    await this.props.deleteAdress(this.props.match.params.token, id);
    this.props.fetchUserAdresses(this.props.match.params.token);

  }

  cancel = () =>{}  

  confirmDeleteAdress= async(adress) =>{
    confirmAlert({
      title: 'Confirm to submit',
      message: `Are you sure to delete ${adress.adress} from your addresses?`,
      buttons:[
        {
          label: 'Yes',
          onClick: async() => this.deleteAdress(adress._id)
        },
        {
          label: 'No',
          onClick: () => this.cancel()
        }
      ]
    })
  }


  renderUsers(adress){
    return(
      <div className="right floated content">
        <button
          onClick={async() => this.confirmDeleteAdress(adress)}
          className="ui button negative">
          Delete
       </button>
      </div>
    );
  }
saveAdressToDB = async (isAdressSelected, selectedCity, selectedStreet, selectedZipAdress,selectedState) =>{
  var values = {
    city: selectedCity,
    zipcode: selectedZipAdress,
    adress: selectedStreet,
    state: selectedState
  };


   await this.props.saveAdress(this.props.match.params.token, values);
   this.props.fetchUserAdresses(this.props.match.params.token);
 }

  submit = async (isAdressSelected, selectedCity, selectedStreet, selectedZipAdress,selectedState) =>{

    confirmAlert({
      title: 'Confirm to submit',
      message: `Are you sure to add ${selectedStreet} to your addresses ?`,
      buttons:[
        {
          label: 'Yes',
          onClick: async() => this.saveAdressToDB(
            isAdressSelected,
            selectedCity,
            selectedStreet,
            selectedZipAdress,
            selectedState
          )
        },
        {
          label: 'No',
          onClick: () => this.cancel()
        }
      ]
    })


  }

  renderList(){
    if(!this.props.isSignedIn){
      history.push('/users/login');
    }
    if(!this.props.userAdresses){
      return <div> No adresses </div>
    }else{
      return this.props.userAdresses.map(adress => {
        return(
          <div className="item" key={adress._id}>
            {this.renderUsers(adress)}
            <i className="large middle aligned icon location arrow"/>
            <div className="content">
              <Link to="#" className="header">{adress.adress}</Link>
              <div className="description">{adress.zipcode}</div>
            </div>
          </div>
      );
    });
    }

  }

  render(){

      return(
        <div>
          <h2> Address Search </h2>

          {this.props.fetching ?
            <Spinner label="Loading.." />
           : null
          }
          <GoogleSuggest/>
          <AdressForm />
          <button
            onClick={async() => this.submit(
              this.props.isAdressSelected,
              this.props.selectedCity,
              this.props.selectedStreet,
              this.props.selectedZipAdress,
              this.props.selectedState


            )}
            className = {this.props.isAdressSelected? 'ui primary button': 'ui disabled button'} >
            Save Address
          </button>
          <h2> My adresses </h2>
          <div className="ui celled list">{this.renderList()}</div>

        </div>

      );

  }

}

const mapStateToProps = state => {
  return{
    userAdresses: Object.values(Object.assign({},state.adresses.userAdresses)),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    isAdressSelected: state.adresses.isAdressSelected,
    selectedStreet: state.adresses.selectedStreetAdress,
    selectedCity: state.adresses.selectedCityAdress,
    selectedZipAdress: state.adresses.selectedZipAdress,
    selectedState: state.adresses.selectedStateAdress,
    fetching: state.adresses.fetching
  }
}

export default connect(mapStateToProps, {fetchUserAdresses,saveAdress,adressSelect,deleteAdress})(AdressList)
