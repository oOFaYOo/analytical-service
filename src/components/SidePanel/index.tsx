import React from 'react';
import {SidePanel as ISidePanel} from "../../types";
import {CircularProgress} from "@mui/material";

const SidePanel = ({user, data}: ISidePanel) => {
    return (
        <div className={'text-zinc-300 bg-zinc-700 min-w-[250px] max-w-[250px] py-12 z-20 grow relative flex justify-start flex-col'}>
            <div className={'w-full relative flex justify-center mb-2'} >
                {user ?
                    <img className={'relative h-28 w-28'}
                             style={{borderRadius: '50%', overflow: 'hidden'}}
                             src={user.photo} /> : null
                }
            </div>
            <p className={'text-center align-middle'}>{user ? user.name : null}</p>
            <p className={'text-zinc-500 text-center align-middle'}>{user ? user.position : null}</p>
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