import React from 'react';
import {Cell as ICell} from "../../../types";
import {Tooltip} from "@mui/material";

const Cell = ({value, plugin, position, width}:ICell) => {

    const cellWidth = width ? width : 'auto';

    const direction = {
        left: 'justify-start',
        right: 'justify-end',
        center: 'justify-center',
    };

    return (
        <td className={'border-zinc-600 border-x-2 border-solid m-0 py-0 px-1'}
            style={{width: cellWidth, minWidth: cellWidth, maxWidth: cellWidth}}>
            <div style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textAlign: position
            }}
                 className={`relative w-full h-full m-0 p-0 ${position ? direction[position] : 'justify-start'} `}>
                {plugin ? plugin(value) : value}
            </div>
        </td>);
};

export default Cell;