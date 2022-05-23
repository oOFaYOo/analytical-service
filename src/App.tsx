import React, {useState} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import HeadToolBar from "./components/HeadToolbar";
import {NodePath} from "./types";
import Users from "./pages/Users";
import Products from "./pages/Products";
import User from "./pages/Users/User";
import Api from "./api";

export const WayContext = React.createContext<{
    way: NodePath[];
    setWay: (way: NodePath[]) => void;
}>({
    way: [], setWay: _ => {
    }
});
export const Admin = React.createContext({name: "", role: ""});
const api = new Api();
export const ApiContext = React.createContext({api: api});

const App = () => {

    let [way, setWay] = useState<NodePath[]>([{url: '/', name: 'Main'}]);

    return (<>
        <WayContext.Provider value={{way: way, setWay: setWay}}>
            <Admin.Provider value={{name: 'Christopher Hunter', role: "Admin"}}>
            <HeadToolBar/>
            </Admin.Provider>
            <ApiContext.Provider value={{api: api}}>
            <Routes>
                <Route path="/" element={<Navigate to={'/users'}/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/users/:id" element={<User/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>
            </ApiContext.Provider>
        </WayContext.Provider>
    </>);
};

export default App;

