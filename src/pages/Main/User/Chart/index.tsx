import React, {useContext, useEffect, useRef, useState} from 'react';
import {CircularProgress} from "@mui/material";
import ChartComponent from "../../../../components/ChartComponent";
import {ChartMetric} from "../../../../types";
import {ApiContext} from "../../index";

const Chart = ({id}:{id:string|undefined}) => {
    const api = useContext(ApiContext).api;

    const [chartData, setChartData] = useState<undefined | ChartMetric[]>(undefined);

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(() => {
        (async () => {
            const data = await api.getChartMetrics(id as string);
            setChartData(data as ChartMetric[])
        })();
    }, [chartData]);

    if (!chartData || !id) {
        return (
            <div className={'flex relative h-full w-full justify-center items-center'}>
                <CircularProgress/>
            </div>
        )
    }

    return (
        <div className={'bg-zinc-700 p-4 text-zinc-300 h-full overflow-x-auto max-w-full w-full relative flex flex-col items-start justify-start'}>
            <ChartComponent labels={labels} data={chartData}/>
        </div>
    );
};

export default Chart;
