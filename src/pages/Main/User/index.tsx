import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";

const User = () => {

    const u = useParams().user;
    const path = useLocation().pathname;

    console.log(path, u);

    return (
        <Link to={path + u}>
            <div>User</div>
        </Link>
    );
};

export default User;