import React from "react";
import {render} from "@testing-library/react";

import SidePanel from "./index";

test('SidePanel test', () => {


    const Comp = ({name, position, user=true, data=true} : { name: string, position: string, user?:boolean, data?:boolean }) => {

        return (
            // @ts-ignore
            <SidePanel user={user ? {name: name, id: '123', photo: '', position: position} : undefined}
                       data={data ? {id: '123', name: 'name', fact: 123, plan: 123, planComplete: 0.6, forecast: 500} : undefined}/>
        )
    }

    const {rerender} = render(<Comp name={'1234567890 some name'} position={'position'}/>);
    rerender(<Comp name={'name'} position={'position'}/>);
    rerender(<Comp name={'name'} position={'position'} user={false} data={false}/>);
})











