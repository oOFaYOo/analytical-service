import React, {useContext, useEffect, useState} from 'react';
import {ApiContext} from "../../../App";
import {ChartMetricType, ProductType} from "../../../types";
import {Link, useParams} from "react-router-dom";
import {CircularProgress, Tooltip} from "@mui/material";
import ChartComponent from "../../../components/ChartComponent";
import {months} from "../../../data";

const Product = () => {

    const api = useContext(ApiContext).api;
    const id = useParams().id as string;
    const labels = months;

    const [data, setData] = useState<undefined | ProductType>(undefined);

    const [chartData, setChartData] = useState<undefined | ChartMetricType[]>(undefined);

    useEffect(() => {
        (async () => {
            const data = await api.getProductChartMetrics(id as string);
            setChartData(data as ChartMetricType[])
        })();
    }, [chartData]);

    useEffect(() => {
        (async () => {
            const product = await api.getProduct(id) as ProductType;
            setData(product);
        })();
    }, [data]);

    if (!data) {
        return (
            <div className={'absolute w-full h-full flex bg-zinc-800 justify-center items-center'}><CircularProgress/></div>
        )
    }

    return (
        <div className={'flex w-full h-full z-0 bg-zinc-800 justify-center items-end'}>
            <div className={'min-h-[750px] relative flex-col' +
            ' bg-zinc-900 flex min-w-[750px] w-[80%] min-h-[530px] h-[85%]'}>
                <div
                    className={'max-h-[70px] min-h-[70px] w-full bg-zinc-600 text-zinc-300 items-center justify-between flex px-6 text-3xl'}>
                    <p>{data.name}</p>
                    <div className={'flex flex-row text-lg grow justify-end text-zinc-400'}>
                        <p className={'mx-8 drop-shadow-md'}>{Math.round(data.fact)} fact</p>
                        <p className={'mx-8 drop-shadow-md'}>{Math.round(data.plan)} plan</p>
                    </div>
                </div>
                <div className={'h-full w-full relative flex flex-row'}>
                    <div className={'relative h-full min-w-[250px] bg-zinc-700'}>
                        <div className={'fixed h-full min-w-[250px] bg-zinc-700'}>
                            <div className={'bg-zinc-800 flex items-center text-zinc-500 px-6 h-8'}>Product Managers:</div>
                            <div className={'h-[70%] overflow-y-scroll pt-2 pb-4 flex flex-col'}>
                                {data.managers.map((item, i) => {
                                    return <Link key={i} to={'/users/' + item.id}>
                                        {item.name.length > 20 ? <Tooltip title={item.name} arrow placement={"right"}>
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
                                                className={'text-zinc-400 px-6 py-2 hover:brightness-150 hover:font-medium hover:shadow-md'}>{item.name}</div>}
                                    </Link>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={'flex w-full p-6 h-full relative justify-center items-center'}>
                        <div className={'bg-zinc-700 relative w-full h-full'}>
                            <ChartComponent labels={labels} data={chartData as ChartMetricType[]} type={'line'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;