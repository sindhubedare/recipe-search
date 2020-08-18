import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: "",
      searchText: "",
      resultLength: "",
      info: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    //  console.log(event.target.value);
    this.getRecipes();
  };
  onSearch = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    this.setState({ searchText: event.target.value });
  };
  getRecipes = async () => {
    //fetch
    //  console.log(this.state.searchText);
    const searchTerm = this.state.searchText;
    //  console.log(searchTerm);
    // let response = await fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${searchTerm}&p=1`);
    let response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${searchTerm}`
    );
    let data = await response.json();
    // console.log(data);
    // console.log(data.results);
    const result = data.results;
    const resultLength = data.results.length;
    // console.log("length" , data.results.length);
    // console.log(result);
    if (resultLength > 0) {
      this.setState({ displayResults: result });
    } else {
      this.setState({ errorMessage: "No Data" });
    }
  };

  render() {
    let response = this.state.displayResults;
    //  console.log(response);
    return (
      <React.Fragment>
        <div className="row flex">
          <form className="col s12">
            <div>
              <div className="input-field">
                <label className="search">Search for recipe here</label>
                <input
                  placeholder="Add upto 2 ingredients using comma"
                  id="recipe-search"
                  type="text"
                  className="validate"
                  value={this.state.searchText}
                  onChange={this.onSearch}
                />
                {/* onChange={event => setString(event.target.value) */}

                <label className="search">Search for recipe here</label>
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={this.onSubmit}
                >
                  FIND ME Recipe<i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* mapping the results to display on screen  */}
        <div className="conatiner">
          <div
            className="row flex"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {response.length &&
              response.map((result, id) => {
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
                  <div className="col s12 m6">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img
                          className="activator"
                          src={result.thumbnail}
                          width="100pt"
                          height="200pt"
                          alt="Not available"
                        />
                      </div>
                      <div className="card-content teal darken-4">
                        <h4 className="card-title activator white-text">
                          {result.title}
                        </h4>
                      </div>
                      <div className="card-reveal white-text brown darken-3">
                        <span className="card-title white-text ">
                          <i className="material-icons right">close</i>
                          {result.title}
                        </span>
                        <h5>Ingredients: </h5>
                        <h6>{result.ingredients}</h6>
                        <br />
                        <h6>
                          <a href={result.href}>"Click here to get recipe"</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
              
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Search;
