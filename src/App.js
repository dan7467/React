import logo from './logo.svg';
import './App.css';
import './Navbar.css';
import Navbar from './Navbar';

export function Contact() {
  document.getElementById('header_title').innerText = 'Contact us!';
  document.getElementById('p1').innerHTML = '<code>yourname@email.com</code>';
}

export function About() {
  document.getElementById('header_title').innerText = 'About us..';
  document.getElementById('p1').innerText = 'Add some information or history for your project';
}

export function Home() {
  document.getElementById('header_title').innerHTML = '<code>react application template</code>';
  document.getElementById('p1').innerHTML = '<i>by </i><code><i>dan7467</i></code>';
}

// TO-DOs: 
// 1. re-structure everything here so that the Navbar and the page's main body is SEPERATED
// 2. add bottom bar (as component)

function App() {
  return (
    <div className="App">
      <div>
      <header className="App-header">
        <Navbar></Navbar>
      </header></div>
      <div id="pagebody">
        <img id="mainlogo" src={logo} className="App-logo" alt="logo" />
          <h1 id="header_title"><code>react application template </code></h1><p id="p1"><i>by </i><code><i>dan7467</i></code></p>
      </div>
    </div>
    
  );
}

export default App;
