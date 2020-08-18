import React from 'react';
import Foodpass from './Foodpass';

function Header () {
    return(
        <div>
        <div className="card-panel white-text teal lighten-2">
            <h4>RECIPE SEARCH</h4>
        </div>
        <div className="food-pass">
        <Foodpass />
        </div>
        
        </div>
    )
}
 export default Header;




