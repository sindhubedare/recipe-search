// import React from "react";
// import "./App.css";
// import Header from "./Components/Header";
// import Search from "./Search/Search";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Search />
//     </div>
//   );
// }
// export default App;


import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Search from './Search/Search';
import HowTo from './Components/HowTo';
import Recipe from './Content/Recipe';
import Home from "./Components/Home";

function App() {
  return (

  <Router>
     <nav>
         <ul className="card-panel white-text teal lighten-2">
         <li>  <Link to = '/'>Home </Link> </li>
             <li>
                <Link to ='/Recipe'> Recipe</Link>
             </li>
             {/* <li>
                 <Link to = '/GenerateMeme'>Create Captions for Meme</Link>
             </li> */}
             
             <li><Link to = '/HowTo'> Instructions to generate Meme</Link></li>
         </ul>   
      </nav>
        <Switch>
 
             <Route exact path="/Recipe"  component={Recipe}/>
             {/* <Route path="/GenerateMeme" component={GenerateMeme}/> */}
             <Route path="/HowTo" component={HowTo} />
             <Route path="/" component={Home} />  
        </Switch>
   
  </Router>


 
  )
}

export default App;
