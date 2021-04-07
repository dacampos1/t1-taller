import React, {useState} from "react";
import apiCall from '../services/api';
import '../styles/episode.css';


function Character(props) {   
    const [stateCharacter, setStateCharacter] = useState()
    const callCharacter =apiCall("characters?name="+props.match.params.name);
    callCharacter.then(x=> setStateCharacter(x))

    function checkInfo(){
      if(stateCharacter){
        if(stateCharacter[0]){
          return true
        }
      }
    }
  return (
    <div className={"row"}> 
        {checkInfo()
        ?(<div className="column">
            <img className="image" alt={stateCharacter[0]["name"]} src={stateCharacter[0]["img"]}/>
            <h3>{'Nombre: '+stateCharacter[0]["name"]}</h3>
            <h3>{'Ocupación: '+stateCharacter[0]["occupation"]}</h3>
            <h3>{'Estado: '+stateCharacter[0]["status"]}</h3>
            <h3>{'Apodo: '+stateCharacter[0]["nickname"]}</h3>
            <h3>{'Id: '+stateCharacter[0]["char_id"]}</h3>
            <h3>{'Interpretado: '+stateCharacter[0]["portrayed"]}</h3>
            <h3>{'Categoría: '+stateCharacter[0]["category"]}</h3>
            <h3>{'Temporadas Breaking Bad: '}</h3>
            <ul className="horizontalList">
            {stateCharacter?stateCharacter[0]["appearance"].map(x=>
            (<li key={x+'B'}><a href={'/'+x+'B'}>{x}</a></li>)):<div/>
            }
            </ul>
            <h3>{'Temporadas Better Call Saul: '}</h3>
            <ul className="horizontalList">
            {stateCharacter[0]["better_call_saul_appearance"].map(x=>
            (<li key={x+'S'}><a href={'/'+x+'S'}>{x}</a></li>))
            }
            </ul>
        </div>)
    :
    (<div className="column">
      <h3>Este personaje no existe</h3>
    </div>)}    </div>
    
  );
}


export default Character;
