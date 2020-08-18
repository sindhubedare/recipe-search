import React from 'react';

//Stateless function to display the information of the website

export default function HowTo(){
    return(
        <React.Fragment>
            <div className= "how-to">
            <p><h3>Input Parameters</h3>
             <ul>
                 <li>Can type upto 2 ingredients with common separting them</li>
                 <li>Click on Find me recipe button</li>
                 <li>Click on the recipe card you like to see the ingredients required to make that recipe</li>
                 <li>Click on the link for detailed recipe</li>
                 <li>Cook and Enjoy!!</li>
             </ul>
             </p>
            </div>
        </React.Fragment>
    )

}