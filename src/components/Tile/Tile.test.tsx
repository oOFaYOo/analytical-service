import {render} from "@testing-library/react";
import React from "react";
import Tile from "./index";

test('Tile test', () => {

    const Comp = ({planComplete, title = 'title'}: { planComplete: number, title?: string }) => {

        return (
            <Tile fact={50} plan={100} planComplete={planComplete} title={title}/>
        )
    }

    const {rerender, container} = render(<Comp planComplete={0.5}/>);
    rerender(<Comp title={'123456789012345678901234567890123456'} planComplete={0.8}/>)
    rerender(<Comp planComplete={1}/>)
    rerender(<Comp planComplete={2}/>)

})



