import React, {useContext, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {ApiContext} from "../../../App";
import {WayContext} from "../../../App";
import {TableMetric, User as IUser} from '../../../types';
import SidePanel from "../../../components/SidePanel";
import Table from "./Table";
import Chart from "./Chart";

const User = () => {

    const api = useContext(ApiContext).api;
    const {way, setWay} = useContext(WayContext);
    const [user, setUser] = useState<undefined | IUser>(undefined);
    const [total, setTotal] = useState<undefined | TableMetric>(undefined);

    const id = useParams().id as string;
    const path = useLocation().pathname;

    const [info, setInfo] = useState<'charts'|'table'>('table');

    useEffect(()=>{
        (async () => {
            if (user)
                return;
            const data = await api.getEmployee(id) as IUser;
            setUser(data);
            setWay([...way, {name: data.name, url: path}])
        })();
    },[user]);

    useEffect(() => {
        (async () => {
            const data = await api.getTotalTableMetrics(id as string);
            setTotal(data as TableMetric)
        })();
    }, [total]);

    return (
        <div className={'relative flex w-full h-full z-0 bg-zinc-800 justify-center items-end'}>
            <div className={'min-h-[750px] relative flex-row' +
            ' bg-zinc-900 flex min-w-[750px] w-[80%] min-h-[530px] h-[85%]'}>
                <SidePanel user={user as IUser} data={total} />
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
                                ? <Table id={user.id} total={total as TableMetric}/>
                                : <Chart id={user.id} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;