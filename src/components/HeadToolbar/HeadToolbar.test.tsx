import React from "react";
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import HeadToolbar, {toBottomSort, toTopSort} from "./index";
import {Admin, FilterContext} from "../../App";
import useFakeTimers = jest.useFakeTimers;
import 'regenerator-runtime/runtime';

test('HeadToolbar test',  async () => {
    useFakeTimers()
    const Comp = () => {

        return (
            <MemoryRouter>
                <FilterContext.Provider value={{sortFunc: undefined, setSortFunc: undefined}}>
                    <Admin.Provider value={{name: 'Christopher Hunter', role: "Admin"}}>
                        <HeadToolbar/>
                    </Admin.Provider>
                </FilterContext.Provider>
            </MemoryRouter>
        )
    }

    const {rerender, container} = render(<Comp/>);

    expect(toTopSort([{name:'b'}, {name:'a'}], 'name')[0].name).toBe('a');
    expect(toTopSort([{name:'a'}, {name:'b'}], 'name')[0].name).toBe('a');
    expect(toTopSort([{name:2}, {name:1}], 'name')[0].name).toBe(1);
    expect(toTopSort([{name:'a'}, {name:'a'}], 'name')[0].name).toBe('a');

    expect(toBottomSort([{name:'b'}, {name:'a'}], 'name')[0].name).toBe('b');
    expect(toBottomSort([{name:'a'}, {name:'b'}], 'name')[0].name).toBe('b');
    expect(toBottomSort([{name:2}, {name:1}], 'name')[0].name).toBe(2);
    expect(toBottomSort([{name:'a'}, {name:'a'}], 'name')[0].name).toBe('b');

})

