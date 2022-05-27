import React from 'react';
import {SidePanelType} from "../../types";
import {CircularProgress, Tooltip} from "@mui/material";

const SidePanel = ({user, data}: SidePanelType) => {
    return (
        <div className={'text-zinc-300 bg-zinc-700 min-w-[250px] max-w-[250px] px-4 py-12 z-20 grow relative flex justify-start flex-col'}>
            <div className={'w-full relative flex justify-center mb-2'} >
                {user ?
                    <img className={'relative h-28 w-28'}
                             style={{borderRadius: '50%', overflow: 'hidden'}}
                             src={user.photo} /> : null
                }
            </div>
            {user ? (user.name.length > 15 ?
                <Tooltip title={user.name} arrow placement={"right"}>
                    <p style={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                    }}
                         className={'relative w-full text-center align-middle m-0 p-0'}>
                        {user.name}
                    </p>
                </Tooltip>
                : <p
                     className={'relative w-full text-center align-middle m-0 p-0'}>
                    {user.name}
                </p>) : null}
            {user ? (user.position.length > 15 ?
                <Tooltip title={user.position} arrow placement={"right"}>
                    <p style={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                    }}
                       className={'text-zinc-500 text-center align-middle'}>
                        {user.position}
                    </p>
                </Tooltip>
                : <p
                    className={'text-zinc-500 text-center align-middle'}>
                    {user.position}
                </p>) : null}

            {data ?
                <>
                    <div className={'mt-8 relative flex justify-center flex-col'}>
                        <p className={'text-center align-middle'}>{Math.round(data.fact)}</p>
                        <p className={'text-zinc-500 text-xs text-center align-middle'}>Fact</p>
                    </div>
                    <div className={'mt-8 relative flex justify-center flex-col'}>
                        <p className={'text-center align-middle'}>{Math.round(data.plan)}</p>
                        <p className={'text-zinc-500 text-xs text-center align-middle'}>Plan</p>
                    </div>
                    <div className={'mt-8 relative flex justify-center flex-col'}>
                        <p className={'text-center align-middle'}>{Math.round(data.forecast)}</p>
                        <p className={'text-zinc-500 text-xs text-center align-middle'}>Forecast</p>
                    </div>
                    <div className={'mt-8 relative flex justify-center flex-col'}>
                        <p className={'text-center align-middle'}>{Math.round(data.planComplete * 100)}%</p>
                        <p className={'text-zinc-500 text-xs text-center align-middle'}>Plan Complete</p>
                    </div>
                </> :
                <div className={'flex grow justify-center items-center'}>
                    <CircularProgress/>
                </div>
            }
        </div>
    );
};

export default  SidePanel;