import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {ITableMetric, IUser} from '../../../types';
import {ApiContext} from "../../../App";

import SlidePanel from "../../../components/SlidePanel";
import SidePanel from "../../../components/SidePanel";

import Table from "./Table";
import Chart from "./Chart";

const User = () => {

    const api = useContext(ApiContext).api;
    const [user, setUser] = useState<undefined | IUser>(undefined);
    const [total, setTotal] = useState<undefined | ITableMetric>(undefined);

    const id = useParams().id as string;

    const [info, setInfo] = useState<'charts'|'table'>('table');

    useEffect(()=>{
        if(!user){
            (async () => {
                const data = await api.getUser(id) as IUser;
                setUser(data);
            })();
        }
    },[user]);

    useEffect(() => {
        if(!total){
            (async () => {
                const data = await api.getTotalTableMetrics(id);
                setTotal(data as ITableMetric)
            })();
        }
    }, [total]);

    return (
        <div className={'relative flex w-full h-full z-0 justify-center items-end'}>
            <SlidePanel values={[{
                title: 'Reporting departments',
                url: '/reporting_departments'
            }, {title: 'Departmental indicators', url: '/departmental_indicators'}]} initial={'close'} total/>
            <div className={'min-h-[750px] rounded-t overflow-hidden relative flex-row' +
            ' bg-zinc-900 flex min-w-[750px] w-[80%] min-h-[530px] h-[85%]'}>
                <SidePanel user={user as IUser} data={total} />
                <div className={'px-4 pb-4 pt-1 flex flex-col overflow-x-auto justify-center items-center grow relative max-w-[95%]'}>
                    <div className={'text-zinc-300 h-12 w-full relative flex flex-row justify-center'}>
                        <button onClick={() => {setInfo('table')}}
                                className={`${info === 'table' ?
                                    'text-zinc-200 w-32 rounded duration-150 hover:bg-blue-500 h-8 bg-blue-600 mr-2':
                                    'w-32 hover:bg-zinc-600 h-8 rounded duration-150 bg-zinc-700 mr-2'}`}>Table</button>
                        <button onClick={() => {setInfo('charts')}}
                                className={`${info === 'charts' ?
                                    'text-zinc-200 w-32 rounded duration-150 hover:bg-blue-500 h-8 bg-blue-600':
                                    'w-32 hover:bg-zinc-600 rounded duration-150 h-8 bg-zinc-700'}`}>Charts</button>
                    </div>
                    <div className={'flex grow w-full max-h-[90%] relative justify-center items-center'}>
                        {!user?.id
                            ? null
                            : info === 'table'
                                ? <Table id={user.id} total={total as ITableMetric}/>
                                : <Chart id={user.id} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(User);