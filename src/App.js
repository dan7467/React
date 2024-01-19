import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1><code>react application template </code></h1><i>by</i>  <code><i>dan7467</i></code>
        <p>
          <button className="button-18"><b>Home</b></button>&ensp;
          <button className="button-18"><b>About</b></button>&ensp;
          <button className="button-18" onClick={Contact}><b>Contact us</b></button>
        </p>
      </header>
    </div>

    
  );
}

export default App;

export function Contact() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1><code>Contact us!</code></h1>  <code>yourname@email.com</code>
        </p>
        <p>
          <button class="button-18"><b>Home</b></button>&ensp;
          <button class="button-18"><b>About</b></button>&ensp;
          <button class="button-18"><b>Contact us</b></button>
        </p>
      </header>
    </div>

    
  );
}
;
