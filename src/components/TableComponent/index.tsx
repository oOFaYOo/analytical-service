import React from 'react';
import Cell from "./Cell";
import {Table as ITable, Title} from './../../types'
import HeaderFooterCell from "./HeaderFooterCell";

const TableComponent = ({titles, data, total}: ITable) => {

    const Rows = () => {
        return (
            <>
                {
                    data.map((value, index) => {
                            return (
                                <tr className={'border-zinc-600 h-12 min-h-[56px] max-h-[56px] border-b-2 bg-zinc-700 border-solid'}>
                                    {titles.map((item: Title, i) => {
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
                                <HeaderFooterCell key={i} value={total[item.key]}
                                                  plugin={item.plugin}
                                                  position={item.position}
                                                  width={item.width}/>
                            )
                        }
                    )
                }
                </tfoot>
            </table>
    );
};

export default TableComponent;