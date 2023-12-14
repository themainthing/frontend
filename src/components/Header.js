import React from "react";
import andersenlogo1 from '../components/andersenlogo1.jpeg';
import './../externalcss/Home.css';
function Header(){

    return(
        <div>
        <h1 id="heading">Andersen-Tracker</h1>
        <img id="img" src={andersenlogo1}  alt="logo" className="App-logo" />

        
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