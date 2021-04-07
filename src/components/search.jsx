import React, {useState}  from 'react';
import apiCall from '../services/api';
import AsyncSelect from 'react-select/async';


function Search(props) {   
    const [selectedOption, setSelectedOption] = useState('')
    function chargeData(inputValue, callback){
        const callCharacters =apiCall("characters?name="+inputValue);
        callCharacters.then((data)=>{
            const tempArray=[];
            data.forEach((x)=>{
                tempArray.push({label:x["name"], value: x["name"]})
            })
            callback(tempArray)
        })
    }
    
    function onSelected(e){
        window.location.replace('/character/'+e["value"])
    }
    function onSearchChange(e){
        if(e){
            setSelectedOption(e)
        }
    }
    return (
        <div className="row">
            <div className="column">
                <h1 className="seasonDiv"><a href="/">T1 Taller</a></h1>
            </div>
            <div className="column">
            <AsyncSelect name="search"  className="busqueda" placeholder="Buscar personajes..." cacheOptions defaultOptions value={selectedOption} onInputChange={(e)=>onSearchChange(e)} onChange={(e)=>onSelected(e)} loadOptions={chargeData} />
            </div>
        </div>
    )
  }
  
  export default Search;
  