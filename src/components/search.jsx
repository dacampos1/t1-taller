import React, {useState}  from 'react';
import apiCallPagination from '../services/pagination';
import AsyncSelect from 'react-select/async';


function Search(props) {   
    const [selectedOption, setSelectedOption] = useState('')
    function chargeData(inputValue, callback){
        const callCharacters =apiCallPagination(inputValue,0,[]);
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
        <div className="topnav">
            <a className="active" href="/">T1 Taller</a>
            <div className="searchcontainer">
            <AsyncSelect name="search"  className="busqueda" placeholder="Buscar personajes..." cacheOptions defaultOptions value={selectedOption} onInputChange={(e)=>onSearchChange(e)} onChange={(e)=>onSelected(e)} loadOptions={chargeData}   noOptionsMessage={()=> "Sin resultados"} loadingMessage={()=> "Buscando..."} />
            </div>
        </div>
    )
  }
  
  export default Search;
  