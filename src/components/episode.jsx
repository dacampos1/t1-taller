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
            (<h5><a href={'/character/' + x}>{x}</a></h5>)):<div/>
            }
            </ul>
        </div>

    </div>
    
  );
}

export default Episode;
