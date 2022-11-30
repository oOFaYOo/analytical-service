import React, {useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Admin} from "../../App";

const HeadToolbar = () => {
    const admin = useContext(Admin);
    const url = useLocation().pathname;

    return (
        <div style={{userSelect: 'none'}} className={'text-zinc-300' +
        ' flex-row px-4 w-full ' +
        'h-12 absolute bg-zinc-700 ' +
        'z-20 flex justify-between items-center shadow-xl'}>
            <div className={'flex flex-row grow'}>
                <Link className={`${url.includes('/users') ? 'text-blue-600' : 'text-inherit '} mr-4 hover:brightness-125`} to={'/users'}>Users</Link>
                <Link className={`${url.includes('/products') ? 'text-blue-600' : 'text-inherit'} hover:brightness-125`} to={'/products'}>Products</Link>
            </div>
            <div className={'text-zinc-400'}>{admin.name + ' '}|{' ' + admin.role}</div>
        </div>
    );
};

export default HeadToolbar;