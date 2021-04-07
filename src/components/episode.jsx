import React, {useState} from "react";
import apiCall from '../services/api';
import '../styles/episode.css';


function Episode(props) {   
    const [stateEpisode, setStateEpisode] = useState()
    const callEpisode =apiCall("episodes/"+props.match.params.id);
    callEpisode.then(x=> setStateEpisode(x))
    const [stateCharacter, setStateCharacter] = useState()

    function selectCharacter(name){
        const callCharacter =apiCall("characters?name="+name);
        callCharacter.then(x=> setStateCharacter(x))
    }
  return (
    <div className={"row"}> 
        <div className="column">
            <h3>{stateEpisode?'Título: '+stateEpisode[0]["title"]:""}</h3>
            <h3>{stateEpisode?'Serie: '+stateEpisode[0]["episode"]:""}</h3>
            <h3>{stateEpisode?'Temporada: '+stateEpisode[0]["season"]:""}</h3>
            <h3>{stateEpisode?'Episodio: '+stateEpisode[0]["episode"]:""}</h3>
            <h3>{stateEpisode?'Id: '+stateEpisode[0]["episode_id"]:""}</h3>
            <h3>{stateEpisode?'Fecha de emisión: '+stateEpisode[0]["air_date"]:""}</h3>
            <h3>Personajes:</h3>
            <ul>
            {stateEpisode?stateEpisode[0]["characters"].map(x=>
            (<h5 onClick={()=>selectCharacter(x)}>{x}</h5>)):<div/>
            }
            </ul>
        </div>
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

export default Episode;
