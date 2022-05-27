import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiContext} from "../../../App";
import {TableMetricType, UserType} from '../../../types';
import SidePanel from "../../../components/SidePanel";
import Table from "./Table";
import Chart from "./Chart";

const User = () => {

    const api = useContext(ApiContext).api;
    const [user, setUser] = useState<undefined | UserType>(undefined);
    const [total, setTotal] = useState<undefined | TableMetricType>(undefined);

    const id = useParams().id as string;

    const [info, setInfo] = useState<'charts'|'table'>('table');

    useEffect(()=>{
        (async () => {
            if (user)
                return;
            const data = await api.getEmployee(id) as UserType;
            setUser(data);
        })();
    },[user]);

    useEffect(() => {
        (async () => {
            if(total) return;
            const data = await api.getTotalTableMetrics(id as string);
            setTotal(data as TableMetricType)
        })();
    }, [total]);

    return (
        <div className={'relative flex w-full h-full z-0 bg-zinc-800 justify-center items-end'}>
            <div className={'min-h-[750px] relative flex-row' +
            ' bg-zinc-900 flex min-w-[750px] w-[80%] min-h-[530px] h-[85%]'}>
                <SidePanel user={user as UserType} data={total} />
                <div className={'p-4 flex flex-col overflow-x-auto justify-center items-center grow relative max-w-[90%]'}>
                    <div className={'text-zinc-300 mb-4 w-full relative flex flex-row justify-center'}>
                        <button onClick={() => {setInfo('table')}}
                                className={`${info === 'table' ?
                                    'text-zinc-200 w-28 hover:bg-blue-500 h-8 bg-blue-600 mr-2':
                                    'w-28 hover:bg-zinc-600 h-8 bg-zinc-700 mr-2'}`}>Table</button>
                        <button onClick={() => {setInfo('charts')}}
                                className={`${info === 'charts' ?
                                    'text-zinc-200 w-28 hover:bg-blue-500 h-8 bg-blue-600':
                                    'w-28 hover:bg-zinc-600 h-8 bg-zinc-700'}`}>Charts</button>
                    </div>
                    <div className={'flex grow w-full max-h-[90%] relative justify-center items-center'}>
                        {!user?.id
                            ? null
                            : info === 'table'
                                ? <Table id={user.id} total={total as TableMetricType}/>
                                : <Chart id={user.id} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;