import React, {useContext, useEffect, useState} from 'react';
import {CircularProgress} from "@mui/material";
import {ApiContext, FilterContext} from "../../App";
import {Link} from "react-router-dom";
import Tile from "../../components/Tile";
import {ProductType} from "../../types";
import SlidePanel from "../../components/SlidePanel";

const Products = () => {

    const api = useContext(ApiContext).api;
    const {sortFunc} = useContext(FilterContext);
    const [data, setData] = useState<undefined | ProductType[]>();

    useEffect(() => {
        (async () => {
            const data = await api.getProducts() as undefined | ProductType[];
            setData(data);
        })()
    }, [data]);

    console.log(sortFunc)

    return (
        <div className={'fixed flex w-full h-full bg-zinc-800'}>
            <SlidePanel values={[{
                title: 'Reporting departments',
                url: '/reporting_departments'
            }, {title: 'Departmental indicators', url: '/departmental_indicators'}]} initial={'close'} total/>
            {data ?
                <div
                    className={'relative overflow-y-scroll justify-evenly flex flex-row pl-[54px] pr-6 pt-20 pb-8 flex-wrap w-full h-full gap-6 content-start'}>
                    {(
                        sortFunc !== undefined ? sortFunc(data, 'planComplete').map((item: ProductType, index: number) => {
                                return <Link key={index} to={'/products/' + item.id}><Tile title={item.name}
                                                                                           plan={item.plan} fact={item.fact}
                                                                                           planComplete={item.planComplete}/></Link>
                            }) :
                            data.map((item: ProductType, index: number) => {
                                return <Link key={index} to={'/products/' + item.id}><Tile title={item.name}
                                                                                           plan={item.plan}
                                                                                           fact={item.fact}
                                                                                           planComplete={item.planComplete}/></Link>
                            })
                    )}
                </div>
                :
                <div className={'absolute w-full h-full flex justify-center items-center'}><CircularProgress/></div>}
        </div>
    );
};

export default Products;