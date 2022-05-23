import React, {useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import {WayContext, Admin} from "../../App";
import {NodePath} from "../../types";

interface IH {
    way: NodePath[];
}

const HeadToolbar = () => {
    const admin = useContext(Admin);
    const {way, setWay} = useContext(WayContext);
    const url = useLocation().pathname;

    return (
        <div style={{userSelect: 'none'}} className={'text-zinc-300' +
        ' flex-row px-4 w-full ' +
        'h-12 absolute bg-zinc-700 ' +
        'z-20 flex justify-between items-center'}>
            <div className={'flex flex-row grow'}>
                <Link className={`${url.includes('/users') ? 'text-blue-600' : 'text-inherit '} mr-4 hover:brightness-125`} to={'/users'}>Users</Link>
                <Link className={`${url.includes('/products') ? 'text-blue-600' : 'text-inherit'} hover:brightness-125`} to={'/products'}>Products</Link>
                {/*{way.map((item, i) => {*/}
                {/*    return <div className={'relative h-full flex justify-center items-center'}*/}
                {/*                key={i}>{i===0 ? null : <div>➞</div>}*/}
                {/*    {way.length-1 === i ?*/}
                {/*        <div className={'text-zinc-200 mx-1 cursor-default hover:text-zinc-200'}>{item.name}</div> :*/}
                {/*        <Link onClick={()=>{if(way.length - 1 !== i) {*/}
                {/*        const newWay = [...way];*/}
                {/*        newWay.pop();*/}
                {/*        setWay(newWay);*/}
                {/*    }}} className={'text-inherit mx-1 hover:text-blue-500'}*/}
                {/*        to={item.url}>{item.name}</Link>}*/}
                {/*    </div>*/}
                {/*})}*/}
            </div>
            <div className={'text-zinc-400'}>{admin.name + ' '}|{' ' + admin.role}</div>
        </div>
    );
};

export default HeadToolbar;