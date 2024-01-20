import logo from './logo.svg';
import './App.css';

function Contact() {
  document.getElementById('header_title').innerText = 'Contact us!';
  document.getElementById('p1').innerHTML = '<code>yourname@email.com</code>';
}

function About() {
  document.getElementById('header_title').innerText = 'About us..';
  document.getElementById('p1').innerText = 'Add some information or history for your project';
}

function Home() {
  document.getElementById('header_title').innerHTML = '<code>react application template</code>';
  document.getElementById('p1').innerHTML = '<i>by </i><code><i>dan7467</i></code>';
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 id="header_title"><code>react application template </code></h1><p id="p1"><i>by </i><code><i>dan7467</i></code></p>
        <p id="buttons">
          <button className="button-18" onClick={Home}><b>Home</b></button>&ensp;
          <button className="button-18" onClick={About}><b>About</b></button>&ensp;
          <button className="button-18" onClick={Contact}><b>Contact us</b></button>
        </p>
      </header>
    </div>
    
  );
}

export default App;
