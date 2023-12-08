import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import AddForm from "./AddForm";
import FetchData from "./FetchData";
import UpdateForm from "./UpdateForm";

const Router = () => {
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/">MAIN PAGE</Link><br/>
                    <Link to="/add">ADD ACTIVITY</Link><br/>
                    <Link to="/get">SHOW ACTIVITY</Link>
                </div>
            </div>
            <Routes>
                <Route path="/add" element={<AddForm/>}/>
                <Route path="/edit/:id" element={<UpdateForm/>}/>
                <Route path="/get" element={<FetchData/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;