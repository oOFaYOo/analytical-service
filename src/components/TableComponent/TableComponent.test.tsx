import React from "react";
import {render} from "@testing-library/react";

import {ITitle} from "../../types";
import TableComponent from "./index";

test('TableComponent test', () => {

    const titles: ITitle[] = [
        {
            name: 'Department',
            key: 'name',
            position: 'center',
        }
    ];

    const Comp = ({total}:{total?:{name:string, planComplete:number, plan:number, forecast:number, fact:number, id:string}}) => {

        return (
            <TableComponent titles={titles} total={total} data={[{name:'Department', planComplete:1, plan:1, forecast:1, fact:1, id:'1'}]}  />
        )
    }

    const {rerender} = render(<Comp />);
    rerender(<Comp total={{name:'Department', planComplete:1, plan:1, forecast:1, fact:1, id:'1'}} />)

})