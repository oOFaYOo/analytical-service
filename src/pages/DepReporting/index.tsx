import React, {useContext, useEffect, useState} from 'react';
import SlidePanel from "../../components/SlidePanel";
import {ApiContext} from "../../App";
import {DepartmentsType} from "../../types";
import {CircularProgress} from "@mui/material";

const DepReporting = () => {

    const api = useContext(ApiContext).api;
    const [data, setData] = useState<undefined | DepartmentsType[]>(undefined);

    useEffect(() => {
        (async () => {
            const data = await api.getDepartments() as undefined | DepartmentsType[];
            setData(data)
        })()
    }, [data])

    return (
                <div className={'relative w-full min-w-[1070px] h-full bg-zinc-800 flex items-end justify-center'}>
                    <SlidePanel values={[{
                        title: 'Reporting departments',
                        url: '/reporting_departments'
                    }, {title: 'Departmental indicators', url: '/departmental_indicators'}]}/>
                    <div className={'bg-zinc-900 min-w-[700px] w-[700px] h-[80%] mb-4 p-2'}>
                        {data ?  <div className={'overflow-x-auto relative w-full h-full'}>
                            {
                                data?.map((item, index) => {
                                    return (<div className={'text-zinc-300 bg-zinc-700 flex relative w-full' +
                                    ' mb-1 hover:bg-zinc-600 h-12 justify-center items-center px-2'}
                                    >{item.address}</div>)
                                })
                            }
                        </div> : <div className={'relative w-full h-full flex justify-center items-center'}><CircularProgress/></div>}
                    </div>
                </div>
    )
}

export default DepReporting;