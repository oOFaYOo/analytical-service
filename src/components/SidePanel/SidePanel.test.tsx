import React from "react";
import SidePanel from "./index";
import {render} from "@testing-library/react";


test('SidePanel test', () => {


    const Comp = ({name, position, user=true, data=true}: { name: string, position: string, user?:boolean, data?:boolean }) => {

        return (
            // @ts-ignore
            <SidePanel user={user ? {name: name, id: '123', photo: '', position: position} : undefined}
                       data={data ? {id: '123', name: 'some name', fact: 123, plan: 123, planComplete: 0.6, forecast: 500} : undefined}/>
        )
    }

    const {rerender, container} = render(<Comp name={'1234567890 some name'} position={'someposition'}/>);
    rerender(<Comp name={'some name'} position={'1234567890position'}/>);
    rerender(<Comp name={'some name'} position={'1234567890position'} user={false} data={false}/>);
})











