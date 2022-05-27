import React, {useContext, useEffect, useState} from 'react';
import {TableMetric, Title} from '../../../../types'
import {CircularProgress, Tooltip} from "@mui/material";
import TableComponent from "../../../../components/TableComponent";
import {ApiContext} from "../../../../App";
import {Link} from "react-router-dom";

const Table = ({id, total}:{id:string|undefined, total:TableMetric}) => {
    const api = useContext(ApiContext).api;

    const [tableData, setTableData] = useState<undefined | TableMetric[]>(undefined);

    const titles:Title[] = [
        {
            name: 'Product Name',
            key: 'name',
            position: 'center',
            width: 150,
            plugin: ((value:number|string, row?:TableMetric) => {
                return (
                    value.toString().length > 20 ?
                        <Tooltip title={value} arrow placement={"right"}>
                            <div style={{
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textAlign: "center"
                            }}
                                 className={'relative w-full h-full m-0 p-0 text-blue-600 hover:brightness-150'}>
                                <Link to={'/products/' + row?.id}>{value}</Link>
                            </div>
                        </Tooltip> : <Link className={'text-blue-600 hover:brightness-150'} to={'/products/' + row?.id}>{value}</Link>
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


        useEffect(() => {
            (async () => {
                if(tableData) return;
                const data = await api.getTableMetrics(id as string);
                setTableData(data as TableMetric[])
            })();
        }, [tableData]);


    if (!tableData || !id || !total) {
        return (
            <div className={'flex relative h-full w-full justify-center items-center'}>
                <CircularProgress/>
            </div>
        )
    }

    return (
        <div className={'text-zinc-300 h-full overflow-x-auto max-w-full w-full relative flex flex-col items-start justify-start'}>
            <TableComponent titles={titles} data={tableData} total={total} />
        </div>
    );
};

export default Table;