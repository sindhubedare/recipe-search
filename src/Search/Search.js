import React from 'react';

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
            //  console.log(event.target.value);
           this.getRecipes()
          }
      onSearch = (event) => {
          event.preventDefault();
          // console.log(event.target.value);
          this.setState({searchText: event.target.value})
          }
       getRecipes = async () => {
            //fetch
            //  console.log(this.state.searchText);
             const searchTerm = this.state.searchText;
            //  console.log(searchTerm);
            let response = await fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${searchTerm}&p=1`);
            let data = await response.json();
            // console.log(data);
            // console.log(data.results);
            const result = data.results;
            const resultLength = data.results.length;
            // console.log("length" , data.results.length);
            // console.log(result);
            if(resultLength > 0){
              this.setState({displayResults: result})
            }
            else{
              this.setState({errorMessage: "No Data"})
            }
    
        }
    
 render (){
   let response = this.state.displayResults;
  //  console.log(response);
     return(
         <React.Fragment>
             <div className="row flex">
                <form className="col s12" >
                  <div className="row flex">
                    <div className="input-field">
                       <input placeholder="Ingredient" id="recipe-search" type="text" className="validate" value={this.state.searchText} onChange= {this.onSearch} />
                          {/* onChange={event => setString(event.target.value) */}
        
                        <label className="search">Search for recipe here</label>
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.onSubmit}>FIND ME Recipe<i className="material-icons right">send</i></button>
                       </div>
                      </div>
                 </form>
              </div>
        
       
      {/* mapping the results to display on screen  */}
        <div className= "conatiner">
        <div className= "row" style={{display: "flex", flexWrap: "wrap"}}>
       {response.length && response.map((result, id) => {
         return (
          //  <div className="poster-results">
          //     {/* <ul key={id} className= "lists-display"> */}
          //   <ul className= "lists-display">
          //    <li  className="results-li">
                
          //       <h5> Recipe Name: {result.title}</h5>
          //       <img src={result.thumbnail} alt= "Not available" />
          //       <h6>Ingredients: {result.ingredients}</h6>
          //       <a href = {result.href}>Click link to get recipe</a>
          //    </li>
          //   </ul>
          //  </div>
          <div className= "col s5 m5 l5">

          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={result.thumbnail} width="100pt" height="200pt" alt ="Not available"/>
               {/* <h6>click image for ingredients</h6> */}
                {/* <h6>{result.title}</h6> */}
             </div>
            <div className="card-content">
             <span className="card-title activator grey-text text-darken-4">{result.title}</span>
               {/* <h5>{result.title}</h5> */}
           
            </div>
           <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{result.title}<i className="material-icons right">close</i></span>
              <h5>Ingredients: </h5>
              <h6>{result.ingredients}</h6>
              <h6><a href={result.href}>Click link to get recipe</a></h6>
           </div>
          </div>
          </div>
         )
       })
      }
       </div>
       </div>
      </React.Fragment>
     )
    }
}
export default Search;




