import React, {useState, useEffect} from 'react';
import Search from './Search';
import Result from '../Content/Result';


function Searchbar (){
    const [searchTerm, setSearchTerm] = useState("");

    useEffect( () => {

    },[searchTerm])
    //Calling api here
    const getRecipes = async () => {
        //fetch
        // let response = await fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3");
         console.log(searchTerm);
        let response = await fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${searchTerm}&p=3");
        let data = await response.json();
        console.log(data);
        


    }

    getRecipes();
    return (
        <div>
            {searchTerm}
            <Search  setSearchTerm= {setSearchTerm}/>
            <Result />
        </div>
    )
}

export default Searchbar;