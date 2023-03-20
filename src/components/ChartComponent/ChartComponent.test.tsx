import React from "react";
import {render} from "@testing-library/react";

import ChartComponent from "./index";

test('ChartComponent test', () => {

    const Comp = ({type}:{type:'line'|'bar'}) => {

        return (
            <ChartComponent labels={['label1', 'label2']} data={[{
                "name": "Golden Compass",
                "year": "2020",
                "color": "rgb(220,188,78)",
                "values": [
                    "103052",
                    "95132",
                    "65452",
                ]
            }]} type={type} />
        )
    }

    const {rerender} = render(<Comp type={'line'} />);


    rerender(<Comp type={'bar'} />)

})
