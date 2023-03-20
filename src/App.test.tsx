import React from "react";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';
import {render} from "@testing-library/react";

import App from "./App";

test('App test', () => {

    const Comp = () => {
        return (
            <MemoryRouter>
            <App />
            </MemoryRouter>
        )
    }

    render(<Comp/>);
})

