import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import AddForm from "./AddForm";
import FetchData from "./FetchData";
import UpdateForm from "./UpdateForm";
import Teams from "./Teams";
import QuizUI from "./QuizUI";
import MarkTable from "./MarkTable";
import AddMark from "./AddMark";
import EditMark from "./EditMark";

const Router = () => {
    return (
            <Routes>
                <Route path="/add/:id" element={<AddForm/>}/>
                <Route path="/edit/:id/:key" element={<UpdateForm/>}/>
                <Route path="/" element={<FetchData/>}/>
                <Route path="/marks" element={<MarkTable/>} />
                <Route path="/addmark/:id" element={<AddMark/>} />
                <Route path="/editmark/:id" element={<EditMark/>} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/QuizUI" element={<QuizUI/>} />
            </Routes>
    );
};

export default Router;