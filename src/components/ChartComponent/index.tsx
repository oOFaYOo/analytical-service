import React, {useEffect, useRef} from "react";
import {Chart, ChartItem, registerables} from 'chart.js';
import {config} from "./chartConfig";
import {ChartMetric} from "../../types";
Chart.register(...registerables);

const ChartComponent = ({labels, data}:{labels:string[], data: ChartMetric[]}) => {

    const datasets = () => {
        return data.map((item:ChartMetric) => {
            return {
                stack: item.year,
                label: item.name + ' ' + item.year,
                data: item.values,
                backgroundColor: item.color,
                borderColor: item.color,
            }
        });
    };

    const canvas = useRef(null);
    const chartObj = useRef(null);
    let chart: ChartItem | null = null;

    useEffect(()=>{
        if(!chartObj.current){
            // @ts-ignore
            chart = new Chart(canvas.current, {...config, data: {labels:labels, datasets:datasets()}});
            chartObj.current = (chart as any);
        }

        return function () {
            chartObj.current = null;
            // @ts-ignore
            chart?.destroy();
        }
    })

    return (
            <canvas ref={canvas} style={{position:"relative"}} />
    );

}

export default ChartComponent;