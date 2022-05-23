import React from 'react';
import {Tooltip} from "@mui/material";

const Tile = ({title, plan, fact, planComplete}: { title: string; plan: number; fact: number; planComplete: number }) => {
    const percent = Math.round(planComplete * 100);

    const color = (value: number) => {
        switch (true) {
            case value < 70 :
                return 'red';
            case value >= 70 && value < 100:
                return 'darkOrange';
            case value === 100 :
                return 'green';
            case value > 100 :
                return 'fuchsia';
        }
    };

    return (
        <div className={'w-[350px] rounded h-[150px] px-6 py-4 bg-zinc-700 flex-col flex justify-between'}>
            {title.length > 35 ? <Tooltip title={title} arrow placement={"right"}>
                <p style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                }}
                   className={'w-full text-zinc-400'}>
                    {title}
                </p>
            </Tooltip> : <p
                className={'w-full text-zinc-400'}>
                {title}
            </p>}
            <div className={'w-full flex grow justify-center items-end flex-col'}>
                <p className={'font-medium text-xl'}
                   style={{color: color(percent)}}>{percent}%</p>
                <div className={'relative w-full h-1 bg-zinc-600 mt-1'}>
                    <div className={'relative h-full'} style={{backgroundColor: color(percent), width:`${percent}%`}}/>
                </div>
            </div>
            <div className={'w-full text-zinc-300 flex flex-row justify-between'}>
                <div>
                    <p className={'m-0 p-0 text-sm'}>{Math.round(fact)}</p>
                    <p className={'text-zinc-500 m-0 p-0 text-xs'}>Fact</p>
                </div>
                <div>
                    <p className={'m-0 p-0 text-sm'}>{Math.round(plan)}</p>
                    <p className={'text-zinc-500 m-0 p-0 text-xs'}>Plan</p>
                </div>
            </div>
        </div>
    )
};

export default Tile;