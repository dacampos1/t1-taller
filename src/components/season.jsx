import React, {useState} from "react";


function Season(props) {   
  return (
    <div> 
        <h3>Temporada {props.num}</h3>
        {props.episodes?props.episodes.map(x=>(<h5>{x["title"]}</h5>)):<div/>}
    </div>
  );
}

export default Season;
