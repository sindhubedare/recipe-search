import React from 'react';
import Button from './Button';

export default () => {
    return(
  <React.Fragment>
  <div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input placeholder="Ingredient" id="first_name" type="text" className="validate" />
        {/* <label htmlFor="first_name">First Name</label> */}
       </div>
      </div>
    </form>
  </div>
  <div className= "submit-button">
    <Button />
  </div>
  </React.Fragment>
    )
}