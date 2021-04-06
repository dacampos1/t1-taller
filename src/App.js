import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
<div class="default-page">
  <div class="header">
    <h1 id="main-title" class="container"> Breaking Bad App</h1>
  </div>
  <div class="main container clearfix">
    <div class="links">
      <ol id="lista">
        <h2>Better Call Saul</h2>
      </ol>
      <script>
        const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul';
        const options = {
          method: 'GET'
        };
        var lista = document.getElementById("lista");
        fetch(url, options)
          .then(response => response.json())
          .then(data => data.map(
              function append(x) { 
                const li=document.createElement('li');
                lista.appendChild(li);
                li.innerHTML=li.innerHTML + x["title"] + x["season"];}));
      </script>

    </div>
  </div>
</div>