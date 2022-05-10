import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import User from "./pages/Main/User";
import Charts from "./pages/Main/User/Charts";
import Table from "./pages/Main/User/Table";

const App = () => {
    return (<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/user/:id/charts" element={<Charts />}/>
        <Route path="/user/:id/table" element={<Table />}/>
    </Routes>);
};

export default App;