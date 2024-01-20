import { About, Contact, Home } from "./App";

function Navbar() {
    return (<div id="c_navbar"><ul>
        <li onClick={Home}><b>Home&ensp;&ensp;</b></li>
        <li><b>News&ensp;&ensp;</b></li>
        <li onClick={Contact}><b>Contact&ensp;&ensp;</b></li>
        <li onClick={About}><b>About&ensp;&ensp;</b></li>
      </ul></div>);
}

export default Navbar;