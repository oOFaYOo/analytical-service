import React, {useContext, useEffect, useState} from 'react';
import {CircularProgress} from "@mui/material";
import {ApiContext} from "../../App";
import {Link} from "react-router-dom";
import Tile from "../../components/Tile";
import {Product} from "../../types";

const Products = () => {

    const [data, setData] = useState<undefined | Product[]>();
    const api = useContext(ApiContext).api;

    useEffect(() => {
        if(data) return;
        (async () => {
            const data = await api.getProducts() as undefined | Product[];
            setData(data);
        })()
    }, [data]);

    return (
        <div className={'fixed flex w-full h-full bg-zinc-800'}>
            {data ?
                <div className={'relative overflow-y-scroll flex flex-row px-6 pt-20 pb-8 flex-wrap w-full h-full gap-6 content-start'}>
                    {data.map((item: Product, index: number) => {
                        return <Link to={'/products/' + item.id}><Tile key={index} title={item.name} plan={item.plan} fact={item.fact}
                                                 planComplete={item.planComplete}/></Link>
                            })
                    }
                </div>
                :
                <div className={'absolute w-full h-full flex justify-center items-center'}><CircularProgress/></div>}
        </div>
    );
};

export default Products;