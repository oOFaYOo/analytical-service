import React from "react";
import {render} from "@testing-library/react";

import {ITableMetric} from "../../../types";
import HeaderFooterCell from "./index";

test('HeaderFooterCell test', () => {

    const Comp = ({value='123', position, width, plugin}:{value?:string, position: "right" | "center" | undefined, width: number | undefined, plugin?:(value: string | number, row?: ITableMetric | undefined) => string | number | JSX.Element}) => {

        return (
            <HeaderFooterCell value={value} plugin={plugin} position={position} width={width} row={{id:'id', name:'name', fact:1, plan:10, forecast:10, planComplete:1}} />
        )
    }

    const {rerender} = render(<Comp position={'center'} width={123} />);
    rerender(<Comp position={'right'} width={123} plugin={()=>''} value={'total'}/>)
    rerender(<Comp position={undefined} width={undefined} plugin={()=>''} />)

})