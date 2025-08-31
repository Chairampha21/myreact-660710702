import logo from './logo.png';
import './App.css';
import Hello from './Hello';  // import Hello component
import JSXExamples from './components/JSXExamples'; 

function App() { 
  return (
    <div className="App">
      <Hello/>
      <JSXExamples/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello This is my React!
          {/* Edit <code>src/App.js</code> and save to reload. */}
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
