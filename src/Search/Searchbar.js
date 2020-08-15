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
     const result = await fetch(`http://www.recipepuppy.com/api/?i=${searchTerm}`, { mode: 'no-cors'} );
     const data = await result.json;
     
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