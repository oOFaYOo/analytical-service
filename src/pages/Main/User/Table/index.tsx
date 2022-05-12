import React from 'react';
import Cell from "../../../../components/Cell";
import {Table as ITable, Title} from './../../../../types'
import HeaderFooterCell from "../../../../components/HeaderFooterCell";
import {CircularProgress} from "@mui/material";

const Table = ({titles, data}: ITable) => {

    if (!data) {
        return (
            <div className={'flex relative h-full w-full justify-center items-center'}>
                <CircularProgress/>
            </div>
        )
    }

    const Rows = () => {
        return (
            <>
                {
                    data.filter(item => item.name !== 'total').map((value, index) => {
                            return (
                                <tr className={'border-zinc-600 h-12 min-h-[56px] max-h-[56px] border-b-2 bg-zinc-700 border-solid'}>
                                    {titles.map((item: Title, i) => {
                                        return (
                                            <Cell key={i} value={value[item.key]} plugin={item.plugin}
                                                  position={item.position}
                                                  width={item.width}/>
                                        )
                                    })}
                                </tr>
                            )
                        }
                    )
                }
            </>
        )
    }


    return (
        <div
            className={'text-zinc-300 h-full overflow-x-auto max-w-full w-full relative flex flex-col items-start justify-start'}>
            <table className={'w-full'}>
                <thead className={'sticky top-0 z-50 border-zinc-600 w-full h-12 border-x-2 border-solid bg-zinc-600'}>
                {titles.map((item, i) => {
                    return (
                        <HeaderFooterCell key={i} value={item.name} width={item.width} position={item.position}/>
                    );
                })}
                </thead>
                <tbody className={'text-sm w-full'}>
                <Rows/>
                </tbody>
                <tfoot className={'sticky bottom-0 z-50 border-zinc-600 h-12 border-x-2 border-solid bg-zinc-600'}>
                {
                    titles.map((item: Title, i) => {
                            return (
                                <HeaderFooterCell key={i} value={data.filter(item => item.name === 'total')[0][item.key]}
                                                  plugin={item.plugin}
                                                  position={item.position}
                                                  width={item.width}/>
                            )
                        }
                    )
                }
                </tfoot>
            </table>
        </div>
    );
};

export default Table;