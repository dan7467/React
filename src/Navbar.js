import { About, Contact, Home } from "./App";
import user_logo from "./userlogo.svg"

function Navbar() {
    return (<div id="c_navbar">
        {/* <ul>
        <li></li>
        <li onClick={Home}><b>&ensp;&ensp;Home&ensp;&ensp;</b></li>
        <li><b>&ensp;&ensp;News&ensp;&ensp;</b></li>
        <li onClick={Contact}><b>&ensp;&ensp;Contact&ensp;&ensp;</b></li>
        <li onClick={About}><b>&ensp;&ensp;About&ensp;&ensp;</b></li>
      </ul> */}
      <img id="user_logo" src={user_logo} alt="Log-in" />&ensp;&ensp;Hello, Guest!
      &ensp;&ensp;<button className="button-18" onClick={Home}><b>Home</b></button>&ensp;&ensp;
          <button className="button-18" onClick={About}><b>About</b></button>&ensp;&ensp;
          <button className="button-18" onClick={Contact}><b>Contact us</b></button>
      
      </div>);
}

export default Navbar;