import React from 'react';
import {connect} from 'react-redux';
import {selectAdress} from '../../actions/adress';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';



 class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }


  handleChange = address => {
    this.setState({address});
  };

  handleSelect = (address, id) => {

    this.props.selectAdress(address);
    this.setState({address})
  };

  renderPlaceAutoComplete(){
    if(this.props.isSignedIn){
      return(
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}

        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autoComplete-dropdown-container">
                {loading && <div >Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.id}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      )
    }else{
      return null
    }
  }

  render() {
    return this.renderPlaceAutoComplete();
  }
}

const mapStateToProps = state =>{
  return{
    isSignedIn: state.auth.isSignedIn,
    selectedStreet: state.adresses.selectedStreetAdress,
    selectedCity: state.adresses.selectedCityAdress,
    selectedZipAdress: state.adresses.selectedCityAdress,
    selectedState: state.adresses.selectedStateAdress
  }
}

export default connect(mapStateToProps, {selectAdress})(LocationSearchInput);
