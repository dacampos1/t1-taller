import apiCall from '../services/api';
import Season from './season';
import React, {useState} from "react";
import _ from 'underscore';
import '../styles/home.css';

function Home(props) {
  const [stateSaul, setStateSaul] = useState([])
  const callSaul =apiCall("episodes?series=Better+Call+Saul");
  callSaul.then(x=> setStateSaul(_.groupBy(x, "season")))
  const [stateBreaking, setStateBreaking] = useState([])
  const callBreaking =apiCall("episodes?series=Breaking+Bad");
  callBreaking.then(x=> setStateBreaking(_.groupBy(x, "season")))
  const openSeason=props.match.params.season
  
  function iterate(state,code){
    if(state){
      const keys = Object.keys(state);
      console.log(keys, openSeason)
      return keys.map(x=>(
        <Season num={x} episodes= {state[x]} open={(x+code)===openSeason?true:false}/>))
    }
  }

  return (
    <div className="row">
        <div className="column">
            <h1>Breaking Bad</h1>
            {iterate(stateBreaking,"B")}
        </div>
        <div className="column">
            <h1>Better Call Saul</h1>
            {iterate(stateSaul,"S")}
        </div>
    </div>
  );
}

export default Home;
