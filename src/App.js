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

function App() {
  return (

  <Router>
     <nav>
         <ul className="lists-display">
         <li>  <Link to = '/'>Home </Link> </li>
             <li>
                <Link to ='/Search'> Search</Link>
             </li>
             {/* <li>
                 <Link to = '/GenerateMeme'>Create Captions for Meme</Link>
             </li> */}
             
             <li><Link to = '/HowTo'> Instructions to generate Meme</Link></li>
         </ul>   
      </nav>
        <Switch>
 
             <Route exact path="/Search"  component={Search}/>
             {/* <Route path="/GenerateMeme" component={GenerateMeme}/> */}
             <Route path="/HowTo" component={HowTo} />
             {/* <Route path="/" component={About} />   */}
        </Switch>
   
  </Router>


 
  )
}

export default App;
