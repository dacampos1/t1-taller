import './App.css';
import apiCall from './services/api';
import Season from './components/season';
import React, {useState} from "react";
import _ from 'underscore';

function App() {
  const [stateSaul, setStateSaul] = useState([])
  const callSaul =apiCall("episodes?series=Better+Call+Saul");
  callSaul.then(x=> setStateSaul(_.groupBy(x, "season")))
  const [stateBreaking, setStateBreaking] = useState([])
  const callBreaking =apiCall("episodes?series=Breaking+Bad");
  callBreaking.then(x=> setStateBreaking(_.groupBy(x, "season")))
  
  function iterate(state){
    if(state){
      const keys = Object.keys(state);
      return keys.map(x=>(<Season num={x} episodes= {state[x]}/>))
    }
  }

  return (
    <div className="App">
      <h1>Breakingg Bad</h1>
      {iterate(stateBreaking)}
      <h1>Better Call Saul</h1>
      {iterate(stateSaul)}
       
    </div>
  );
}

export default App;
