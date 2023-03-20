import React from "react";
import {MemoryRouter} from 'react-router';
import 'regenerator-runtime/runtime';

import {render} from '@testing-library/react';
import useFakeTimers = jest.useFakeTimers;

import {Admin} from "../../App";
import HeadToolbar from "./index";

test('HeadToolbar test',  async () => {
    useFakeTimers()
    const Comp = () => {

        return (
            <MemoryRouter>
                    <Admin.Provider value={{name: 'name', role: "role"}}>
                        <HeadToolbar/>
                    </Admin.Provider>
            </MemoryRouter>
        )
    }

    render(<Comp/>);

})

