import { About, Contact, Home } from "./App";
import user_logo from "./userlogo.svg"

function Navbar() {
    return (<div id="c_navbar">
          <button className="button-18" onClick={Home}><b>Home</b></button>&ensp;&ensp;
          <button className="button-18" onClick={About}><b>About</b></button>&ensp;&ensp;
          <button className="button-18" onClick={Contact}><b>Contact us</b></button>
          &ensp;&ensp;&ensp;&ensp;<img id="user_logo" src={user_logo} alt="Log-in" />&ensp;&ensp;Hello, Guest!
      &ensp;&ensp;
      
      </div>);
}

export default Navbar;