import React from 'react';
import {ICell} from "../../../types";

const Cell = ({value, plugin, position, width, row}:ICell) => {

    const cellWidth = width ? width : 'auto';

    const direction = {
        left: 'justify-start',
        right: 'justify-end',
        center: 'justify-center',
    };

    return (
        <td className={'border-zinc-700 border-x-2 border-solid m-0 py-0 px-1'}
            style={{width: cellWidth, minWidth: cellWidth, maxWidth: cellWidth}}>
            <div style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textAlign: position
            }}
                 className={`relative w-full h-full m-0 p-0 ${position ? direction[position] : 'justify-start'} `}>
                {plugin ? plugin(value, row) : value}
            </div>
        </td>);
};

export default Cell;