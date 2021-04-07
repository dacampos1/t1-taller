import React , {useState} from "react";
import _ from 'underscore';


function Season(props) {   
  const {num,episodes, open}= props;
  const sorted_episodes =  _.sortBy(episodes,"episode_id")
  const [show, setShow] = useState(open)

  function switchShow(){
    setShow(!show)
  }
  return (
    <div className="seasonDiv"> 
        <h3 onClick={switchShow}>Temporada {num}</h3>
        {show&&Array.isArray(sorted_episodes)?sorted_episodes.map(
          x=>(<h5>
              <a key={x["episode_id"]} href={'/episode/'+x["episode_id"]} >
                {x["episode"] + " - "+x["title"]}
              </a>
              </h5>)):<div/>
        }
    </div>
  );
}

export default Season;
