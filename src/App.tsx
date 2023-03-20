import React, {createContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";

import {ApiClient} from "./api/ApiClient";
import {FakeApiClient} from "./api/FakeApiClient";

import HeadToolBar from "./components/HeadToolbar";

import Users from "./pages/Users";
import Products from "./pages/Products";
import User from "./pages/Users/User";
import Product from "./pages/Products/Product";
import DepIndicators from "./pages/DepIndicators";
import DepReporting from "./pages/DepReporting";

const api = new FakeApiClient();
export const Admin = createContext({name: "", role: ""});
export const ApiContext = createContext({api: api});

const App = () => {

    return (<>
            <Admin.Provider value={{name: 'Christopher Hunter', role: "Admin"}}>
                <HeadToolBar/>
            </Admin.Provider>
            <ApiContext.Provider value={{api: api}}>
                <Routes>
                    <Route path="/" element={<Navigate to={'/users'}/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/users/:id" element={<User/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/:id" element={<Product/>}/>
                    <Route path="/reporting_departments" element={<DepReporting/>}/>
                    <Route path="/departmental_indicators" element={<DepIndicators/>}/>
                </Routes>
            </ApiContext.Provider>
    </>);
};

export default App;

