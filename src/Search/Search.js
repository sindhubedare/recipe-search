// import React, {useState} from 'react';
// import Button from './Button';


// export default (setSearchTerm) => {
//   const [string, setString] = useState("")

//   const onSubmit = (event) => {
//      event.preventDefault();
//      console.log(event.target.value);
//      setSearchTerm(string);
//   }
//   const onSearch = (event) => {
//   event.preventDefault();
//   console.log(event.target.value);
//   setString(event.target.value);
//   }

  
//     return(
//   <React.Fragment>
//   <div className="row">
//   {/* <form className="col s12" onSubmit={e => onSubmit(e)}> */}
//   <form className="col s12" >
//     <div className="row">
//       <div className="input-field col s6">
//         <input placeholder="Ingredient" id="recipe-search" type="text" className="validate" value={string} onChange= {e => onSearch(e)} />
//     {/* onChange={event => setString(event.target.value) */}
        
//         <label htmlFor="recipe-search">Search for recipe here</label>
//         <button onClick={(e) => onSubmit(e)}>Submit</button>
//        </div>
//       </div>
//     </form>
//   </div>
//   <div className= "submit-button">
//     <Button />
//   </div>
//   </React.Fragment>
//     )
//     }



import React from 'react';
import Searchbar from './Searchbar';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayResults: '',
            searchText:'',
            resultLength: ''
        }
    }

    onSubmit = (event) => {
             event.preventDefault();
             console.log(event.target.value);
           this.getRecipes()
          }
      onSearch = (event) => {
          event.preventDefault();
          console.log(event.target.value);
          this.setState({searchText: event.target.value})
          }
       getRecipes = async () => {
            //fetch
            // let response = await fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3");
             console.log(this.state.searchText);
             const searchTerm = this.state.searchText;
             console.log(searchTerm);
            let response = await fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${searchTerm}&q=omelet&p=1`);
            let data = await response.json();
            console.log(data);
            console.log(data.results);
           
            

            
    
    
        }
    
 render (){
     return(
         <React.Fragment>
   <div className="row">

  <form className="col s12" >
     <div className="row">
       <div className="input-field col s6">
         <input placeholder="Ingredient" id="recipe-search" type="text" className="validate" value={this.state.searchText} onChange= {this.onSearch} />
     {/* onChange={event => setString(event.target.value) */}
        
         <label htmlFor="recipe-search">Search for recipe here</label>
         <button onClick={this.onSubmit}>Submit</button>
                </div>
       </div>
     </form>
   </div>

  </React.Fragment>

     )
 }
}
export default Search;