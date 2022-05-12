import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {ApiContext} from '../index';
import {WayContext} from "../../../App";
import {TableMetric, User as IUser} from '../../../types';
import SidePanel from "../../../components/SidePanel";
import Table from "./Table";
import Charts from "./Charts";

const User = () => {

    const api = useContext(ApiContext).api;
    const {way, setWay} = useContext(WayContext);
    const [user, setUser] = useState<undefined | IUser>(undefined);
    const [tableData, setTableData] = useState<undefined | TableMetric[]>(undefined);

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
            const data = await api.getTableMetrics(id);
            setTableData(data as TableMetric[])
        })();
    }, [tableData]);

    return (
        <div className={'relative flex w-full h-full z-0 bg-zinc-800 justify-center items-end'}>
            <div className={'min-h-[750px] relative flex-row' +
            ' bg-zinc-900 flex min-w-[750px] w-[70%] min-h-[530px] h-[85%]'}>
                <SidePanel user={user as IUser} data={tableData ? tableData.filter(item => item.productName === 'total')[0]:undefined} />
                <div className={'p-4 flex grow flex-col'}>
                    <div className={'text-zinc-300 mb-4 flex flex-row justify-center'}>
                        <button onClick={() => {setInfo('table')}}
                                className={`${info === 'table' ?
                                    'text-zinc-200 w-28 hover:bg-blue-500 h-8 bg-blue-600 mr-2':
                                    'w-28 hover:bg-zinc-600 h-8 bg-zinc-700 mr-2'}`}>Table</button>
                        <button onClick={() => {setInfo('charts')}}
                                className={`${info === 'charts' ?
                                    'text-zinc-200 w-28 hover:bg-blue-500 h-8 bg-blue-600':
                                    'w-28 hover:bg-zinc-600 h-8 bg-zinc-700'}`}>Charts</button>
                    </div>
                    <div className={'flex grow justify-center items-center'}>
                        {info === 'table' ? <Table/> : <Charts/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;