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
// import Error from './Error';
// import Searchbar from './Searchbar';

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
            // console.log(data);
            // console.log(data.results);
            const result = data.results;
            const resultLength = data.results.length;
            // console.log("length" , data.results.length);
            // console.log(result);

            //display only 1st item title of the array
            // console.log(data.results[0].title);
            // const errorMessage = response.data.error_message;


            if(resultLength > 0){
              this.setState({displayResults: result})
            }
            else{
              this.setState({errorMessage: "No Data"})
            }

            // if(resultLength > 0){
            //   this.setState({displayResults: result})
            //   this.setState ({resultLength: false})
            // }
            // else{
            //   this.setState({resultLength: true})
            // }
            // catch (error){
            //   console.log(error.messages)
            //   this.setState({hasError: error.message})
            // }
    
        }
    
 render (){
   let response = this.state.displayResults;
   console.log(response);
     return(
         <React.Fragment>
             <div className="row">
                <form className="col s12" >
                  <div className="row">
                    <div className="input-field col s6">
                       <input placeholder="Ingredient" id="recipe-search" type="text" className="validate" value={this.state.searchText} onChange= {this.onSearch} />
                          {/* onChange={event => setString(event.target.value) */}
        
                        <label htmlFor="recipe-search">Search for recipe here</label>
                        <button onClick={this.onSubmit}>FIND ME Recipe</button>
                       </div>
                      </div>
                 </form>
              </div>
          
       <div>
       {/* //mapping the results to display on screen */}
       {response.length && response.map((result, id) => {
         return (
           <div className="poster-results">
              {/* <ul key={id} className= "lists-display"> */}
            <ul className= "lists-display">
             <li  className="results-li">
                <a href = {result.href}>Click link to get recipe</a>
                <h5> Recipe Name: {result.title}</h5>
                <h6>Ingredients: {result.ingredients}</h6>
             </li>
            </ul>
           </div>
         )
       })
      }
       </div>
       {/* <div>
    {this.state.hasError && (this.state.info == null) && <h3> {this.state.hasError}</h3>}
       </div> */}
      </React.Fragment>
     )
    }
}
export default Search;