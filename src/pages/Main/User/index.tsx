import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {ApiContext} from '../index';
import {WayContext} from "../../../App";
import {User as IUser} from '../../../types';

const User = () => {

    const api = useContext(ApiContext).api;
    const {way, setWay} = useContext(WayContext);
    const [user, setUser] = useState<undefined | IUser>(undefined);

    const id = useParams().id as string;
    const path = useLocation().pathname;

    useEffect(()=>{
        (async () => {
            if (user)
                return;

            const data = await api.getEmployee(id) as IUser;
            setUser(data);

            setWay([...way, {name: data.name, url: path}])
        })();
    },[user]);

    return (<>
            <Link to={path + '/charts'}>Charts</Link>
            <Link to={path + '/table'}>Table</Link>
        </>
    );
};

export default User;