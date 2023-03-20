import React from 'react';

import {ITable, ITitle} from '../../types'

import Cell from "./Cell";
import HeaderFooterCell from "./HeaderFooterCell";

const TableComponent = ({titles, data, total}: ITable) => {

    const Rows = () => {
        return (
            <>
                {
                    data.map((value, index) => {
                            return (
                                <tr key={index} className={'border-zinc-700/50 h-12 min-h-[56px] max-h-[56px] border-b-2 bg-zinc-700/30 border-solid'}>
                                    {titles.map((item: ITitle, i) => {
                                        return (
                                            <Cell key={i} row={value} value={value[item.key]} plugin={item.plugin}
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
            <table className={'w-full'}>
                <thead className={'sticky top-0 z-30 border-zinc-700 w-full h-12 border-x-2 border-solid bg-zinc-700'}>
                {titles.map((item, i) => {
                    return (
                        <HeaderFooterCell key={i} value={item.name} width={item.width} position={item.position}/>
                    );
                })}
                </thead>
                <tbody className={'text-sm w-full'}>
                <Rows/>
                </tbody>
                {
                    total ?
                        <tfoot className={'sticky bottom-0 z-30 border-zinc-700 h-12 border-x-2 border-solid bg-zinc-700'}>
                        {
                            titles.map((item: ITitle, i) => {
                                    return (
                                        <HeaderFooterCell key={i} value={total[item.key]}
                                                          plugin={item.plugin}
                                                          position={item.position}
                                                          width={item.width}/>
                                    )
                                }
                            )
                        }
                        </tfoot> : null
                }
            </table>
    );
};

export default React.memo(TableComponent);