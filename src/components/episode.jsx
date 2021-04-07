import React, {useState} from "react";
import apiCall from '../services/api';


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
    <div> 
        <div>
            <h3>Título {stateEpisode?stateEpisode[0]["title"]:""}</h3>
            <h3>Serie {stateEpisode?stateEpisode[0]["episode"]:""}</h3>
            <h3>Temporada {stateEpisode?stateEpisode[0]["season"]:""}</h3>
            <h3>Episodio {stateEpisode?stateEpisode[0]["episode"]:""}</h3>
            <h3>Id {stateEpisode?stateEpisode[0]["episode_id"]:""}</h3>
            <h3>Fecha de emisión {stateEpisode?stateEpisode[0]["air_date"]:""}</h3>
            <h3>Personajes</h3>
            <ul>
            {stateEpisode?stateEpisode[0]["characters"].map(x=>
            (<h5 onClick={()=>selectCharacter(x)}>{x}</h5>)):<div/>
            }
            </ul>
        </div>
        <div>
            <img alt={stateCharacter?stateCharacter[0]["name"]:""} src={stateCharacter?stateCharacter[0]["img"]:""}/>
            <h3>Nombre {stateCharacter?stateCharacter[0]["name"]:""}</h3>
            <h3>Ocupación {stateCharacter?stateCharacter[0]["occupation"]:""}</h3>
            <h3>Estado {stateCharacter?stateCharacter[0]["status"]:""}</h3>
            <h3>Apodo {stateCharacter?stateCharacter[0]["nickname"]:""}</h3>
            <h3>Id {stateCharacter?stateCharacter[0]["char_id"]:""}</h3>
            <h3>Interpretado {stateCharacter?stateCharacter[0]["portrayed"]:""}</h3>
            <h3>Categoria {stateCharacter?stateCharacter[0]["category"]:""}</h3>
            <h3>Temporadas Breaking Bad </h3>
            <ul>
            {stateCharacter?stateCharacter[0]["appearance"].map(x=>
            (<h5><a href={'/'+x+'B'}>{x}</a></h5>)):<div/>
            }
            </ul>
            <h3>Temporadas Better Call Saul </h3>
            <ul>
            {stateCharacter?stateCharacter[0]["better_call_saul_appearance"].map(x=>
            (<h5><a href={'/'+x+'S'}>{x}</a></h5>)):<div/>
            }
            </ul>
        </div>
    </div>
    
  );
}

export default Episode;
