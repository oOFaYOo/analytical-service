import React from "react";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';

import {render} from "@testing-library/react";

import {ApiContext} from "../../App";
import Products from "./index";

test("Products test", async () => {
    jest.useFakeTimers()

    const Comp = () => {

        return (
            <MemoryRouter>
                <ApiContext.Provider value={{
                    api: {
                        getUsers: jest.fn(),
                        getDepartments: jest.fn(),
                        getUser: jest.fn(),
                        getTotalTableMetrics: jest.fn(),
                        getTableMetrics: jest.fn(),
                        getUserChartMetrics: jest.fn(),
                        getProducts: jest.fn().mockImplementation(() => {
                            return Promise.resolve(
                                [
                                    {
                                        id: "5df4g65d",
                                        name: "b",
                                        plan: 1000000,
                                        fact: 756300,
                                        planComplete: 0.7563,
                                        managers: [{name: "Emily Stewart", id: "258d2x2s5s2x6"}, {
                                            name: "David Nicholson",
                                            id: "9d59g59h5j6g"
                                        }, {name: "Catherine Lester", id: "i8k72nkk3j2m"}]
                                    },
                                    {
                                        id: "5df4g65d",
                                        name: "a",
                                        plan: 1000000,
                                        fact: 756300,
                                        planComplete: 0.7563,
                                        managers: [{name: "Emily Stewart", id: "258d2x2s5s2x6"}, {
                                            name: "David Nicholson",
                                            id: "9d59g59h5j6g"
                                        }, {name: "Catherine Lester", id: "i8k72nkk3j2m"}]
                                    },
                                    {
                                        id: "5df4g65d",
                                        name: "b",
                                        plan: 1000000,
                                        fact: 756300,
                                        planComplete: 0.7563,
                                        managers: [{name: "Emily Stewart", id: "258d2x2s5s2x6"}, {
                                            name: "David Nicholson",
                                            id: "9d59g59h5j6g"
                                        }, {name: "Catherine Lester", id: "i8k72nkk3j2m"}]
                                    }
                                ])
                        }),
                        getProduct: jest.fn(),
                        getProductChartMetrics: jest.fn(),
                    }
                }}>
                    <Products />
                </ApiContext.Provider>
            </MemoryRouter>
        )
    }

    const {rerender} = render(<Comp/>);

    await Promise.resolve();
    jest.advanceTimersByTime(2000);
    rerender(<Comp/>)

})


