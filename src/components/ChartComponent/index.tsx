import React, {useEffect, useRef} from "react";
import {Chart, ChartItem, registerables} from 'chart.js';
import {config as barConfig} from "./barChartConfig";
import {config as lineConfig} from "./lineChartConfig";
import {IChartComponent, IChartMetric} from "../../types";
Chart.register(...(registerables ?? []));

const ChartComponent = ({labels, data, type} : IChartComponent) => {
    const datasets = () => {
        if(type === 'bar'){
            return data.map((item:IChartMetric) => {
                return {
                    stack: item.year,
                    label: item.name + ' ' + item.year,
                    data: item.values,
                    backgroundColor: item.color,
                    borderColor: item.color,
                }
            });
        } else if('line') {
            return data.map((item:IChartMetric) => {
                return {
                    label: item.name + ' ' + item.year,
                    data: item.values,
                    backgroundColor: item.color,
                    borderColor: item.color,
                    tension: 0.1,
                    fill: false,
                }
            });
        }
    };

    const canvas = useRef(null);
    const chartObj = useRef(null);
    let chart: ChartItem | null = null;
    let config:any;

    if(type === 'bar'){
        config = {...barConfig}
    } else if(type === 'line'){
        config = {...lineConfig}
    }

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
            <canvas ref={canvas} />
    );
}

export default React.memo(ChartComponent);