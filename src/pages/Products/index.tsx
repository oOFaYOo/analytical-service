import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {CircularProgress} from "@mui/material";

import {IProduct} from "../../types";
import {ApiContext} from "../../App";

import Tile from "../../components/Tile";
import SlidePanel from "../../components/SlidePanel";

const Products = () => {

    const api = useContext(ApiContext).api;
    const [data, setData] = useState<undefined | IProduct[]>();

    useEffect(() => {
        if(!data){
            (async () => {
                const data = await api.getProducts() as IProduct[];
                setData(data);
            })()
        }
    }, [data]);

    return (
        <div className={'fixed flex w-full h-full'}>
            <SlidePanel values={[{
                title: 'Reporting departments',
                url: '/reporting_departments'
            }, {title: 'Departmental indicators', url: '/departmental_indicators'}]} initial={'close'} total/>
            {data ?
                <div
                    className={'relative overflow-y-scroll justify-start flex flex-row pl-[54px] pr-6 pt-20 pb-8 flex-wrap w-full h-full gap-6 content-start'}>
                    {(
                            data.sort((a, b) => {
                                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                    return -1;
                                } else return 0;
                            }).map((item: IProduct, index: number) => {
                                return <Link key={index} to={'/products/' + item.id}>
                                             <Tile title={item.name}
                                                   plan={item.plan}
                                                   fact={item.fact}
                                                   planComplete={item.planComplete}/>
                                        </Link>
                            })
                    )}
                </div>
                :
                <div className={'absolute w-full h-full flex justify-center items-center'}><CircularProgress/></div>}
        </div>
    );
};

export default React.memo(Products);