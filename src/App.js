import React, {useEffect, useState} from 'react';
import Router from "./components/Router";
import './styles/App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
      <div>

        <Header/>
        <Router/>


      </div>
  );
}

export default App;
