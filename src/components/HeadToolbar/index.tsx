import React, {useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Admin} from "../../App";

const HeadToolbar = () => {
    const admin = useContext(Admin);
    const url = useLocation().pathname;

    return (
        <div style={{userSelect: 'none'}} className={'text-zinc-300 min-w-[1100px]' +
        ' flex-row px-4 w-full ' +
        'h-12 absolute bg-zinc-700 ' +
        'z-20 flex justify-between items-center shadow-xl'}>
            <div className={'flex justify-center flex-row grow w-full relative'}>
                <Link className={`${url.includes('/users') ? 'flex justify-center items-center text-zinc-200 w-28 hover:bg-blue-500 h-8 bg-blue-600 mr-2' : 'flex justify-center items-center w-28 hover:brightness-110 h-8 bg-zinc-600 mr-2'}`} to={'/users'}>Users</Link>
                <Link className={`${url.includes('/products') ? 'flex justify-center items-center text-zinc-200 w-28 hover:bg-blue-500 h-8 bg-blue-600' : 'flex justify-center items-center w-28 hover:brightness-110 h-8 bg-zinc-600'}`} to={'/products'}>Products</Link>
            </div>
            <div className={'text-zinc-400 mr-4 right-0 absolute'}>{admin.name + ' '}|{' ' + admin.role}</div>
        </div>
    );
};

export default HeadToolbar;