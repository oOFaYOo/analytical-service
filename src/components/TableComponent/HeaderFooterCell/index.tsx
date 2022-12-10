import React from 'react';
import {CellType} from "../../../types";

const HeaderFooterCell = ({value, position, width, plugin}:CellType) => {

    const cellWidth = width ? width : 100;

    const direction = {
        left: 'justify-start',
        right: 'justify-end',
        center: 'justify-center',
    };

    return (
        <td style={{width:cellWidth, minWidth:cellWidth, maxWidth: cellWidth}}>
            <div className={`flex relative w-full h-full m-0 p-0 ${position ? direction[position] : 'justify-start'} `}>
                {value === 'total' ? 'Total' : (plugin ? plugin(value) : value)}
            </div>
        </td>);
};

export default HeaderFooterCell;