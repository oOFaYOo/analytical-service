import React, {useContext, useEffect, useState} from 'react';
import {CircularProgress} from "@mui/material";
import ChartComponent from "../../../../components/ChartComponent";
import {IChartMetric} from "../../../../types";
import {ApiContext} from "../../../../App";
import {months} from "../../../../data";

const Chart = ({id}:{id:string|undefined}) => {
    const api = useContext(ApiContext).api;

    const [chartData, setChartData] = useState<undefined | IChartMetric[]>(undefined);

    const labels = months;

    useEffect(() => {
        if(!chartData){
            (async () => {
                const data = await api.getUserChartMetrics(id as string);
                setChartData(data as IChartMetric[])
            })();
        }
    }, [chartData]);

    if (!chartData || !id) {
        return (
            <div className={'flex relative h-full w-full justify-center items-center'}>
                <CircularProgress/>
            </div>
        )
    }

    return (
        <div className={'bg-zinc-700/30 p-4 text-zinc-300 h-full overflow-x-auto max-w-full w-full relative flex flex-col items-start justify-start'}>
            <ChartComponent labels={labels} data={chartData} type={'bar'}/>
        </div>
    );
};

export default Chart;
