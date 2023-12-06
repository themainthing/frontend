import AddForm from "./components/AddForm";
import React, {useEffect, useState} from 'react';
import MembersList from "./components/MembersList";
import FetchData from "./components/FetchData";
import axios from "axios";

function Fetch() {
    return (
        <div className="App">
            <FetchData/>
        </div>
    );
}

export default Fetch;