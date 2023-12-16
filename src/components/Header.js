import React from "react";
import andersenlogo1 from '../components/andersenlogo1.jpeg';
import './../externalcss/Home.css';
import {Link} from "react-router-dom";

function Header(){

    return(
        <div>
        <h1 id="heading">Andersen-Tracker
        <img id="img" src={andersenlogo1}  alt="logo" className="App-logo" />
        <nav>
        <h5>
          <div className="nav-box">
         <li id="nav-link" ><Link to="/" className="nav-button">Home</Link></li>
         <li id="nav-link"><Link to="/teams" className="nav-button">Quiz</Link></li>
         <li id="nav-link"><Link to="/marks" className="nav-button">Marks</Link></li>
         </div>
         </h5>
        </nav>
        </h1>

        
       {/* <input
         type="text"
        //  value={inputValue}
        //  onChange={handleInputChange}
        // placeholder="Enter text"
        //<button >Click me</button>
       /> */}
      
     </div>
    );
}

export default Header;