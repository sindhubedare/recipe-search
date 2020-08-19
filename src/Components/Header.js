// import React from 'react';
// // import Foodpass from './Foodpass';

// class Header extends React.Component{
//     state={}
//     render(){
//     return(
//         <div>
//         <div className="card-panel white-text teal lighten-2">
//             <h4>RECIPE SEARCH</h4>
//         </div>
//         {/* <div className="food-pass">
//         <Foodpass />
//         </div> */}
        
//         </div>
//     )
// }
// }
//  export default Header;

 import React from 'react';
// import Foodpass from './Foodpass';

class Header extends React.Component{
 constructor(props) {
     super(props);
     this.header = "Find me"
 }
 render (){
     return(
     <div>
         {this.header};
     </div>
     );
 }
}
 export default Header;





