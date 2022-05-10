import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";

const User = () => {

    const id = useParams().id;
    const path = useLocation().pathname;

    console.log(path, id);

    return (<>
            <div>User
            </div>
            <Link to={path + '/charts'}>Charts</Link>
            <Link to={path + '/table'}>Table</Link>
        </>
    );
};

export default User;