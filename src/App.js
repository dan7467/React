import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a <code>react-app</code> template
        </p>
        <p>
          <button><b>Home</b></button>&ensp;
          <button><b>About</b></button>&ensp;
          <button><b>Contact us</b></button>
        </p>
      </header>
    </div>

    
  );
}

export default App;
