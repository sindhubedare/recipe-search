import React from "react";
import Error from "./Error";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: "",
      searchText: "",
      resultLength: "",
      errorMessage: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    //  console.log(event.target.value);
    // alert("hi");
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
    var resultLength = data.results.length;
    // console.log("length" , data.results.length);
    // console.log(result);
    if (resultLength > 0) {
      this.setState({ displayResults: result });
      this.setState({ errorMessage: false });
    } else {
      this.setState({ errorMessage: true });
      // resultLength = 0;
      // console.log(errorMessage);
    }
  };

  render() {
    let response = this.state.displayResults;
    //  console.log(response);
    // console.log(this.state.errorMessage);
    return (
      <React.Fragment>
        <div className="row flex">
          <form className="col s12">
            <div>
              <div className="input-field">
                <label className="search">Search for recipe here</label>
                <input
                  id="recipe-search"
                  type="text"
                  value={this.state.searchText}
                  onChange={this.onSearch}
                />
                {/* className="validate"   placeholder="Add upto 2 ingredients using comma" */}
                {/* onChange={event => setString(event.target.value) */}

                {/* <label className="search">Search for recipe here</label> */}
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
            {response.length > 0 &&
              // this.state.errorMessage ?  <Error/>:

              response.map((result, id) => {
                return (
                  <div className="col s12 m6">
                    <div className="card">
                      {/* <div> */}
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
          {/* <div>  {response.length<=0 && <Error/>}</div> */}
          {/* <div>  {this.state.errorMessage && <Error/>}</div> */}
        </div>
        <div> {this.state.errorMessage && <Error />}</div>
      </React.Fragment>
    );
  }
}
export default Search;

//https://css-tricks.com/fetching-data-in-react-using-react-async/
