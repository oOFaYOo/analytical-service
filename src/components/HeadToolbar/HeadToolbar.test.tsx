import React from "react";
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import HeadToolbar from "./index";
import {Admin} from "../../App";
import useFakeTimers = jest.useFakeTimers;
import 'regenerator-runtime/runtime';

test('HeadToolbar test',  async () => {
    useFakeTimers()
    const Comp = () => {

        return (
            <MemoryRouter>
                    <Admin.Provider value={{name: 'Christopher Hunter', role: "Admin"}}>
                        <HeadToolbar/>
                    </Admin.Provider>
            </MemoryRouter>
        )
    }

    const {rerender, container} = render(<Comp/>);

})

