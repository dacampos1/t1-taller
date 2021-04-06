import React from "react";
import _ from 'underscore';


function Season(props) {   
  const {num,episodes}= props;
  const sorted_episodes =  _.sortBy(episodes,"episode_id")
  return (
    <div> 
        <h3>Temporada {num}</h3>
        {Array.isArray(sorted_episodes)?sorted_episodes.map(x=>(<h5 key={x["episode_id"]} >{x["episode"] + " - "+x["title"]}</h5>)):<div/>}
    </div>
  );
}

export default Season;
