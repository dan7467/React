import { About, Contact, Home } from "./App";

function Navbar() {
    return (<div id="c_navbar"><div id="innerdiv">
          <button className="button-18" onClick={Home}><b>Home</b></button>&ensp;&ensp;
          <button className="button-18" onClick={About}><b>About</b></button>&ensp;&ensp;
          <button className="button-18" onClick={Contact}><b>Contact us</b></button>
          <div id="userarea"><div><a href="/Login">Login</a> | <a href="/Signup">Sign-up!</a>&ensp;&ensp;</div></div>
      &ensp;&ensp;
      </div>
      </div>);
}

export default Navbar;