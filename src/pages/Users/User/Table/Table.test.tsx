import React from "react";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';

import {render} from "@testing-library/react";

import {ApiContext} from "../../../../App";
import Table from "./index";

test("Table test", async () => {
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
                        getTableMetrics: jest.fn().mockImplementation((id:string) => {
                            return Promise.resolve(
                                [{
                                    "id": "5df4g65d",
                                    "name": "Golden Compass 1234567890",
                                    "plan": 100000,
                                    "fact": 75630,
                                    "forecast": 100000,
                                    "planComplete": 0.7563
                                }, {
                                    "id": "7g8df7gd89f7d98f",
                                    "name": "Sirius",
                                    "plan": 100000,
                                    "fact": 31445,
                                    "forecast": 90000,
                                    "planComplete": 0.31445
                                }, {
                                    "id": "7g8df7gd89f7d98f",
                                    "name": "Sirius",
                                    "plan": 100000,
                                    "fact": 31445,
                                    "forecast": 90000,
                                    "planComplete": 1
                                }, {
                                    "id": "7g8df7gd89f7d98f",
                                    "name": "Sirius",
                                    "plan": 100000,
                                    "fact": 31445,
                                    "forecast": 90000,
                                    "planComplete": 2
                                }, ]
                            )
                        }),
                        getUserChartMetrics: jest.fn(),
                        getProducts: jest.fn(),
                        getProduct: jest.fn(),
                        getProductChartMetrics: jest.fn(),
                    }
                }}>
                    <Table id={'258d2x2s5s2x6'} total={{
                        "id": "5df4g65d",
                        "name": "Golden Compass",
                        "plan": 100000,
                        "fact": 75630,
                        "forecast": 100000,
                        "planComplete": 0.7563
                    }}/>
                </ApiContext.Provider>
            </MemoryRouter>
        )

    }

    const {rerender} = render(<Comp/>);

    await Promise.resolve();
    jest.advanceTimersByTime(2000);
    rerender(<Comp/>)
})