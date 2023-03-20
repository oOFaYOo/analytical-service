import React, {useContext} from 'react';
import {Link, useLocation} from "react-router-dom";

import {Admin} from "../../App";

const HeadToolbar = () => {
    const admin = useContext(Admin);
    const url = useLocation().pathname;

    const tabs = [
        {title: 'Users', url: '/users'},
        {title: 'Products', url: '/products'}
    ];

    return (
        <div style={{userSelect: 'none'}} className={'text-zinc-300 flex-row w-full h-12 absolute bg-zinc-700 ' +
            'z-50 flex justify-between items-center shadow-xl'}>
            <div className={'flex justify-center flex-row grow w-full relative'}>
                {
                    tabs.map((v, i) => {
                        return (
                            <Link
                                className={`${url.includes(v.url) ? (url.includes('/', 1) ? 'flex justify-center items-center text-zinc-200 duration-150 rounded w-32 hover:brightness-110 h-8 bg-zinc-600 border-4 border-blue-600 mr-2'
                                        : 'flex justify-center rounded duration-150 items-center text-zinc-200 w-32 hover:bg-blue-500 h-8 bg-blue-600 mr-2') :
                                    'flex justify-center items-center duration-150 rounded w-32 hover:brightness-110 h-8 bg-zinc-600/70 mr-2'}`}
                                to={v.url}>
                                {v.title}
                            </Link>
                        )
                    })
                }
            </div>
            <div className={'text-zinc-400 right-6 absolute'}>{admin.name + ' '}|{' ' + admin.role}</div>
        </div>
    );
};

export default React.memo(HeadToolbar);