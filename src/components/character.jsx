import React, {useState} from "react";
import apiCall from '../services/api';
import '../styles/episode.css';


function Character(props) {   
    const [stateCharacter, setStateCharacter] = useState()
    const callCharacter =apiCall("characters?name="+props.match.params.name);
    callCharacter.then(x=> setStateCharacter(x))
  return (
    <div className={"row"}> 
        <div className={stateCharacter?"column":"none"}>
            <img className="image" alt={stateCharacter?stateCharacter[0]["name"]:""} src={stateCharacter?stateCharacter[0]["img"]:""}/>
            <h3>{stateCharacter?'Nombre: '+stateCharacter[0]["name"]:""}</h3>
            <h3>{stateCharacter?'Ocupación: '+stateCharacter[0]["occupation"]:""}</h3>
            <h3>{stateCharacter?'Estado: '+stateCharacter[0]["status"]:""}</h3>
            <h3>{stateCharacter?'Apodo: '+stateCharacter[0]["nickname"]:""}</h3>
            <h3>{stateCharacter?'Id: '+stateCharacter[0]["char_id"]:""}</h3>
            <h3>{stateCharacter?'Interpretado: '+stateCharacter[0]["portrayed"]:""}</h3>
            <h3>{stateCharacter?'Categoría: '+stateCharacter[0]["category"]:""}</h3>
            <h3>{stateCharacter?'Temporadas Breaking Bad: ':""}</h3>
            <ul className="horizontalList">
            {stateCharacter?stateCharacter[0]["appearance"].map(x=>
            (<li><a href={'/'+x+'B'}>{x}</a></li>)):<div/>
            }
            </ul>
            <h3>{stateCharacter?'Temporadas Better Call Saul: ':""}</h3>
            <ul className="horizontalList">
            {stateCharacter?stateCharacter[0]["better_call_saul_appearance"].map(x=>
            (<li><a href={'/'+x+'S'}>{x}</a></li>)):<div/>
            }
            </ul>
        </div>
    </div>
    
  );
}

export default Character;
