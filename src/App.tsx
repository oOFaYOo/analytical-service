import React, {useState} from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Main, {ApiContext} from "./pages/Main";
import User from "./pages/Main/User";
import Charts from "./pages/Main/User/Charts";
import Table from "./pages/Main/User/Table";
import HeadToolBar from "./components/HeadToolbar";
import {NodePath} from "./types";

export const WayContext = React.createContext<{
    way: NodePath[];
    setWay: (way: NodePath[]) => void;
}>({
    way: [], setWay: _ => {
    }
});
export const Admin = React.createContext({name: "", role: ""});

const App = () => {

    let [way, setWay] = useState<NodePath[]>([{url: '/', name: 'Main'}]);

    return (<>
        <WayContext.Provider value={{way: way, setWay: setWay}}>
            <Admin.Provider value={{name: 'Christopher Hunter', role: "Admin"}}>
            <HeadToolBar/>
            </Admin.Provider>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/user/:id" element={<User/>}/>
                <Route path="/user/:id/charts" element={<Charts/>}/>
                <Route path="/user/:id/table" element={<Table/>}/>
            </Routes>
        </WayContext.Provider>
    </>);
};

export default App;

