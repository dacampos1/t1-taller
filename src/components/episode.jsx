import React, {useState} from "react";
import apiCall from '../services/api';
import '../styles/episode.css';


function Episode(props) {   
    const [stateEpisode, setStateEpisode] = useState()
    const callEpisode =apiCall("episodes/"+props.match.params.id);
    callEpisode.then(x=> setStateEpisode(x))

    function checkInfo(){
      if(stateEpisode){
        if(stateEpisode[0]){
          return true
        }
      }
    }

  return (
    <div className={"row"}> 
              {checkInfo()
        ?(<div className="column">
            <h3>{'Título: '+stateEpisode[0]["title"]}</h3>
            <h3>{'Serie: '+stateEpisode[0]["episode"]}</h3>
            <h3>{'Temporada: '+stateEpisode[0]["season"]}</h3>
            <h3>{'Episodio: '+stateEpisode[0]["episode"]}</h3>
            <h3>{'Id: '+stateEpisode[0]["episode_id"]}</h3>
            <h3>{'Fecha de emisión: '+stateEpisode[0]["air_date"]}</h3>
            <h3>Personajes:</h3>
            <ul>
              {stateEpisode[0]["characters"].map(x=>
                (<h5><a href={'/character/' + x}>{x}</a></h5>))}
            </ul>
          
          </div>)
      :
      (<div className="column">
        <h3>Este episodio no existe</h3>
      </div>)}
      

    </div>
    
  );
}

export default Episode;
