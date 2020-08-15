import React, {useState} from 'react';
import Button from './Button';


export default (setSearchTerm) => {
  const [string, setString] = useState("")

  const onSubmit = (event) => {
     event.preventDefault();
     setSearchTerm(string);
  }
    return(
  <React.Fragment>
  <div className="row">
  <form className="col s12" onSubmit={e => onSubmit(e)}>
    <div className="row">
      <div className="input-field col s6">
        <input placeholder="Ingredient" id="recipe-search" type="text" className="validate" value={string} onChange={event => setString(event.target.value)}/>
        
        <label htmlFor="recipe-search">Search for recipe here</label>
       </div>
      </div>
    </form>
  </div>
  <div className= "submit-button">
    <Button onClick={(e) => onSubmit(e) }/>
  </div>
  </React.Fragment>
    )
}