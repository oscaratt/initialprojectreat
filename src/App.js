import logo from './logo.svg';
import './App.css';
import Componet from './Componet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world, I´m Oscar Atencia!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Componet/>
      </header>
    </div>
  );
}

export default App;
