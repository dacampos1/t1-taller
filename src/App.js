import './App.css';
import apiCall from './services/api';
import Season from './components/season';
import React, {useState} from "react";

function App() {
  const [state, setstate] = useState([])
  const call =apiCall("episodes?series=Better+Call+Saul");
  call.then(x=> setstate(x))
  

  return (
    <div className="App">
      <h1>Breaking Bad</h1>
       <Season num = "13" episodes = {state}/>
      <h1>Better Call Saul</h1>
        <Season num = "1"/>
    </div>
  );
}

export default App;
