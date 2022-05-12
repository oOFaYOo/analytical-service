import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import User from "./pages/Main/User";
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
            </Routes>
        </WayContext.Provider>
    </>);
};

export default App;

