import AddForm from "./components/AddForm";
import React, {useEffect, useState} from 'react';
import MembersList from "./components/MembersList";
import FetchData from "./components/FetchData";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="navbar">
            <div className="navbar__links">
                <a href="/add">ADD ACTIVITY</a>
                <a href="/get">SHOW ACTIVITY</a>
            </div>
        </div>
        <Routes>
            <Route path="/add" element={<AddForm/>}/>
            <Route path="/get" element={<FetchData/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
