import React from 'react';


const Error = ({label}) => {
  return(
    <div className="ui error message">
      <div className="header">{label} </div>
    </div>
  )
}

export default Error;
