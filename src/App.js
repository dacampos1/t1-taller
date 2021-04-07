import './App.css';
import {Switch,Route} from 'react-router-dom'
import Episode from './components/episode';
import Home from './components/home';
import Character from './components/character';
import React  from "react";

function App() {

  return (
    <div className="App">
       <Switch>
        <Route path= "/episode/:id" component={Episode}></Route>
        <Route path= "/character/:name" component={Character}></Route>
        <Route path= "/:season" component={Home}></Route>
        <Route path= "/" component={Home}></Route>
       </Switch>
    </div>
  );
}

export default App;
