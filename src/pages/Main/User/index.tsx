import React, {useContext, useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {ApiContext} from '../index';
import {WayContext} from "../../../App";
import {TableMetric, Title, User as IUser} from '../../../types';
import SidePanel from "../../../components/SidePanel";
import Table from "./Table";
import Charts from "./Charts";
import {Tooltip} from "@mui/material";

const User = () => {

    const api = useContext(ApiContext).api;
    const {way, setWay} = useContext(WayContext);
    const [user, setUser] = useState<undefined | IUser>(undefined);
    const [tableData, setTableData] = useState<undefined | TableMetric[]>(undefined);

    const id = useParams().id as string;
    const path = useLocation().pathname;

    const [info, setInfo] = useState<'charts'|'table'>('table');

    const titles:Title[] = [
        {
            name: 'Product Name',
            key: 'name',
            position: 'center',
            width: 150,
            plugin: (value => {
                return (
                    value.toString().length > 20 ?
                    <Tooltip title={value} arrow placement={"right"}>
                        <div style={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textAlign: "center"
                        }}
                             className={'relative w-full h-full m-0 p-0'}>
                            {value}
                        </div>
                    </Tooltip> : value
                )
            })
        },
        {
            name: 'Fact',
            key: 'fact',
            position: 'center',
            plugin: (value => {
                return (
                    Math.round(value as number)
                )
            })
        },
        {
            name: 'Plan',
            key: 'plan',
            position: 'center',
            plugin: (value => {
                return (
                    Math.round(value as number)
                )
            })
        },
        {
            name: 'Plan Complete',
            key: 'planComplete',
            position: 'center',
            width: 150,
            plugin: (value => {
                const percent = Math.round(+value*100);
                const color = (percent:number) => {
                    switch (true) {
                        case percent < 70 :
                            return 'red';
                        case percent >= 70 && percent < 100:
                            return 'darkOrange';
                        case percent === 100 :
                            return 'green';
                        case percent > 100 :
                            return 'fuchsia';
                    }
                };
                return (
                    <div className={'relative flex w-full h-full flex-row items-center justify-between px-2'}>
                        <div className={'relative h-1 w-[70%] bg-zinc-500 mr-2'}>
                            <div className={'relative h-1'}
                                 style={{width: `${percent}%`, backgroundColor: `${color(percent)}`}}/>
                        </div>
                        <div>{percent}%</div>
                    </div>
                )
            })
        },
        {
            name: 'Forecast',
            key: 'forecast',
            position: 'center',
            plugin: (value => {
                return (
                    Math.round(value as number)
                )
            })
        },
    ];

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
            ' bg-zinc-900 flex min-w-[750px] w-[80%] min-h-[530px] h-[85%]'}>
                <SidePanel user={user as IUser} data={tableData ? tableData.filter(item => item.name === 'total')[0]:undefined} />
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
                        {info === 'table' ? <Table titles={titles} data={tableData as TableMetric[]}/> : <Charts/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;