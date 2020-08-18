import React from 'react';

//Stateless function to display the information of the website

export default function HowTo(){
    return(
        <React.Fragment>
            <div className= "how-to">
            <p><h3>Input Parameters</h3>
                <strong>How many ingredients?</strong> <span className="text-color">upto 2 ingredients </span><br/>
                <strong>Comma ","</strong> <span className="text-color">"," between 2 ingredients</span><br/>
                <strong></strong> <span className="text-color">Top text for the meme </span>&nbsp;&nbsp;
                <strong> text1:</strong> <span className="text-color">botton text for the meme </span>
             </p>
            </div>
        </React.Fragment>
    )

}