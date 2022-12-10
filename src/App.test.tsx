import React from "react";
import App from "./App";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';

test('App test', () => {

    const Comp = () => {
        return (
            <MemoryRouter>
            <App />
            </MemoryRouter>
        )
    }

    const {rerender, container} = render(<Comp/>);

})

