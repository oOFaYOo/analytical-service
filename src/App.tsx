import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import User from "./pages/Main/User";

const App = () => {
    return (<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<User/>}/>
    </Routes>);
};

export default App;