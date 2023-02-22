import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {ApiContext} from "../../App";
import SlidePanel from "../../components/SlidePanel";
import {IUser} from "../../types";

const Users = () => {

    const [data, setData] = useState<undefined | IUser[]>();
    const [search, setSearch] = useState<string>('');
    const api = useContext(ApiContext).api;

    useEffect(() => {
        if(!data){
            (async () => {
                const data = await api.getUsers() as IUser[];
                setData(data);
            })()
        }
    }, [data]);

    return (
        <>
            <Link to={'/'}/>
            <div className={'relative flex w-full h-full z-0 justify-center items-center'}>
                <SlidePanel values={[{
                    title: 'Reporting departments',
                    url: '/reporting_departments'
                }, {title: 'Departmental indicators', url: '/departmental_indicators'}]} initial={'close'}/>
                {data ?
                    <div className={'relative flex flex-col w-full h-full justify-end items-center'}>
                        <input onChange={e => {
                            setSearch(e.currentTarget.value)
                        }} placeholder={'John Doe . . .'}
                               className={'text-zinc-300 shadow-xl rounded bg-zinc-800 flex' +
                               ' relative w-[35%] min-w-[500px] max-w-[635px] mb-8 hover:bg-zinc-700/70 h-12 outline-none' +
                               ' px-4 justify-center items-center'}/>
                        <div style={{userSelect: 'none'}}
                             className={'justify-start shadow-lg rounded mb-6 relative' +
                             ' items-center w-[35%] flex-col max-w-[635px] flex min-w-[500px] min-h-[60%]' +
                             ' max-h-[60%] overflow-y-scroll'}>
                            {
                                data.filter((item: any) => item.name.toLocaleLowerCase()
                                .indexOf(search.toLocaleLowerCase()) !== -1)
                                .map((item: { name: string, id: string }, i: number) => {
                                    return (<Link className={'relative w-full'} key={i}
                                                  to={'/users/' + item.id}>
                                        <div className={'text-zinc-300 rounded bg-zinc-700/70 flex relative w-full' +
                                        ' mb-1 hover:bg-zinc-700 h-12 justify-center items-center'}
                                        >{item.name}</div>
                                    </Link>)
                                })
                            }</div>
                    </div>
                    : <CircularProgress/>}
            </div>
        </>

    );
};

export default Users;