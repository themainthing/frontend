import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import AddForm from "./AddForm";
import FetchData from "./FetchData";
import UpdateForm from "./UpdateForm";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/add/:id" element={<AddForm/>}/>
                <Route path="/edit/:id/:key" element={<UpdateForm/>}/>
                <Route path="/" element={<FetchData/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;