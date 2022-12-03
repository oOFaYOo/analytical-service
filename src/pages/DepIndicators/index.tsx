import React, {useContext, useEffect, useState} from 'react';
import SlidePanel from "../../components/SlidePanel";
import {ApiContext, FilterContext} from "../../App";
import {DepartmentsType, TitleType} from "../../types";
import {CircularProgress} from "@mui/material";
import TableComponent from "../../components/TableComponent";

const DepIndicators = () => {
    const api = useContext(ApiContext).api;
    const [data, setData] = useState<undefined | DepartmentsType[]>(undefined);
    const {sortFunc} = useContext(FilterContext);

    useEffect(() => {
        (async () => {
            const data = await api.getDepartments() as undefined | DepartmentsType[];
            setData(data)
        })()
    }, [data])

    const titles: TitleType[] = [
        {
            name: 'Department',
            key: 'name',
            position: 'center',
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
                const percent = Math.round(+value * 100);
                const color = (percent: number) => {
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

    return (
        <div className={'relative w-full h-full bg-zinc-800 flex items-end justify-center'}>
            <SlidePanel values={[{
                title: 'Reporting departments',
                url: '/reporting_departments'
            }, {title: 'Departmental indicators', url: '/departmental_indicators'}]}/>
            <div className={'bg-zinc-900 min-w-[700px] w-[60%] h-[80%] mb-6'}>
                {data ?
                    <div className={'relative flex grow bg-zinc-800 h-full'}>
                        <div
                            className={'text-zinc-300 h-full overflow-x-auto max-w-full w-full relative flex flex-col items-start justify-start'}>
                            <TableComponent titles={titles} data={sortFunc ? sortFunc(data, 'planComplete') : data}/>
                        </div>
                    </div>
                    : <div className={'relative w-full h-full flex justify-center items-center'}>
                        <CircularProgress/></div>
                }
            </div>
        </div>
    )
}

export default DepIndicators;