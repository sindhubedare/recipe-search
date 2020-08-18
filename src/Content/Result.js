import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import HowTo from '../Components/HowTo';
// export default () => {
//     return (
//         <div>
//             <h1> Result</h1>
//         </div>
//     )
// }

export default function Result() {
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
               <Route path="/" component={About} />  
          </Switch>
     
    </Router>


   
    )
}
