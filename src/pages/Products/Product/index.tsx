import React, {useContext, useEffect, useState} from 'react';
import {ApiContext} from "../../../App";
import {IChartMetric, IProduct} from "../../../types";
import {Link, useParams} from "react-router-dom";
import {CircularProgress, Tooltip} from "@mui/material";
import ChartComponent from "../../../components/ChartComponent";
import {months} from "../../../data";
import SlidePanel from "../../../components/SlidePanel";

const Product = () => {

    const api = useContext(ApiContext).api;
    const id = useParams().id as string;
    const labels = months;

    const [data, setData] = useState<undefined | IProduct>(undefined);

    const [chartData, setChartData] = useState<undefined | IChartMetric[]>(undefined);

    useEffect(() => {
        if(!chartData){
            (async () => {
                const data = await api.getProductChartMetrics(id as string);
                setChartData(data as IChartMetric[])
            })();
        }
    }, [chartData]);

    useEffect(() => {
        if(!data){
            (async () => {
                const product = await api.getProduct(id) as IProduct;
                setData(product);
            })();
        }
    }, [data]);

    return (
        <div className={'relative w-full h-full'}>
            <SlidePanel values={[{
                title: 'Reporting departments',
                url: '/reporting_departments'
            }, {title: 'Departmental indicators', url: '/departmental_indicators'}]} initial={'close'} total/>
            <div className={'flex w-full h-full min-w-[855px] z-0 justify-center items-end'}>
                {data ? <div className={'min-h-[750px] rounded-t relative flex-col' +
                    ' bg-zinc-900 flex min-w-[750px] w-[80%] min-h-[530px] h-[85%]'}>
                        <div
                            className={'max-h-[70px] min-h-[70px] rounded-t w-full bg-zinc-700 text-zinc-300 items-center justify-between flex px-6 text-3xl'}>
                            <p>{data.name}</p>
                            <div className={'flex flex-row text-lg grow justify-end text-zinc-400'}>
                                <p className={'mx-8 drop-shadow-md'}>{Math.round(data.fact)} fact</p>
                                <p className={'mx-8 drop-shadow-md'}>{Math.round(data.plan)} plan</p>
                            </div>
                        </div>
                        <div className={'h-full w-full relative flex flex-row'}>
                            <div className={'relative h-full min-w-[250px] bg-zinc-700'}>
                                <div className={'fixed h-full min-w-[250px] bg-zinc-700'}>
                                    <div className={'bg-zinc-800 flex items-center text-zinc-500 px-6 h-8'}>Product
                                        Managers:
                                    </div>
                                    <div className={'h-[70%] overflow-y-scroll pt-2 pb-4 flex flex-col'}>
                                        {data.managers.map((item, i) => {
                                            return <Link key={i} to={'/users/' + item.id}>
                                                {item.name.length > 20 ?
                                                    <Tooltip title={item.name} arrow placement={"right"}>
                                                        <div style={{
                                                            textOverflow: 'ellipsis',
                                                            overflow: 'hidden',
                                                            whiteSpace: 'nowrap',
                                                        }}
                                                             className={'text-zinc-900 px-6 py-2 hover:brightness-125'}>
                                                            {item.name}
                                                        </div>
                                                    </Tooltip> :
                                                    <div
                                                        className={'text-zinc-400 px-6 py-2 hover:brightness-150 hover:font-medium shadow hover:shadow-md'}>{item.name}</div>}
                                            </Link>
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div
                                className={'bg-zinc-900 p-4 text-zinc-300 h-full overflow-x-auto max-w-full w-full relative flex flex-col items-center justify-start'}>
                                <div
                                    className={'bg-zinc-700/30 p-4 text-zinc-300 h-full overflow-x-auto max-w-[95%] w-[95%] relative flex flex-col items-center justify-start'}>
                                    <ChartComponent labels={labels} data={chartData as IChartMetric[]} type={'line'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className={'relative w-full h-full flex justify-center items-center'}><CircularProgress/>
                    </div>}
            </div>
        </div>
    );
};

export default Product;