import React, {useState} from 'react';
import Search from './Search';
import Result from '../Content/Result';


function Searchbar (){
    const [searchTerm, setSearchTerm] = useState("");
    //Calling api here
    const getRecipes =() => {

    }
    return (
        <div>
            {searchTerm}
            <Search  setSearchTerm= {setSearchTerm}/>
            <Result />
        </div>
    )
}

export default Searchbar;