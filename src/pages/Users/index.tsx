import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {ApiContext} from "../../App";

const Users = () => {

    const [data, setData] = useState<undefined | { name: string, id: string }[]|any>();
    const [search, setSearch] = useState<string>('');
    const api = useContext(ApiContext).api;

    useEffect(() => {
        (async () => {
            const data = await api.getEmployees() as undefined | { name: string, id: string }[];
            setData(data);
        })()
    }, [data]);

    return (
        <>
            <Link to={'/'} />
                    <div className={'relative flex w-full h-full z-0 bg-zinc-800 justify-center items-center'}>
                        {data ?
                            <div className={'relative flex flex-col w-full h-full justify-end items-center'}>
                                <input  onChange={e => {
                                        setSearch(e.currentTarget.value)
                                }} placeholder={'John Doe . . .'} className={'text-zinc-300 bg-zinc-700 flex' +
                                ' relative w-[50%] min-w-[520px] mb-8 hover:bg-zinc-600 h-12 outline-none' +
                                ' px-4 justify-center items-center'}/>
                                <div style={{userSelect: 'none'}} className={'justify-start mb-6 relative' +
                                ' items-center flex-col py-4 bg-zinc-900 pl-2 flex w-[520px] min-h-[60%]' +
                                ' max-h-[60%] overflow-y-scroll'}>
                                    {data.filter((item:any) => item.name.toLocaleLowerCase()
                                        .indexOf(search.toLocaleLowerCase()) !== -1)
                                        .map((item: { name: string, id: string }, i: number) => {
                                            return (<Link className={'relative w-full'} key={i}
                                                          to={'/users/' + item.id}>
                                                <div className={'text-zinc-300 bg-zinc-700 flex relative w-full' +
                                                ' mb-1 hover:bg-zinc-600 h-12 justify-center items-center'}
                                                >{item.name}</div>
                                            </Link>)
                                        })}</div>
                            </div>
                            : <CircularProgress/>}
                    </div>
        </>

    );
};

export default Users;