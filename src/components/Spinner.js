import React from 'react';


const Spinner = ({label}) => {
  return(
    <div className="ui active dimmer">
     <div className="ui text loader"> {label} </div>
   </div>
  )
}

export default Spinner;
