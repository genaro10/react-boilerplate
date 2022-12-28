import logo from './logo.svg';
import './App.css';

function App() {
  const isFunction = () => {
    console.log('dale');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.ds
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactssdssddsasdasdsas
        </a>
      </header>
    </div>
  );
}

export default App;
