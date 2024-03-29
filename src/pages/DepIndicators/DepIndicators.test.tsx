import React from "react";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';

import {render} from "@testing-library/react";

import {ApiContext} from "../../App";
import DepIndicators from "./index";

test("DepIndicators test", async () => {
    jest.useFakeTimers()

    const Comp = () => {

        return (
            <MemoryRouter>
                <ApiContext.Provider value={{
                    api: {
                        getUsers: jest.fn(),
                        getDepartments: jest.fn().mockImplementation(() => {
                            return Promise.resolve(
                                [
                                    {
                                        "address": "5508 Harvey Ways, Apt. 186, 75321, New Anastacio, Connecticut, United States",
                                        "date": "17.01.2021",
                                        "id": "5df4g65d",
                                        "name": "5508 Harvey Ways",
                                        "plan": 100000,
                                        "fact": 75630,
                                        "forecast": 100000,
                                        "planComplete": 0.7563
                                    },
                                    {
                                        "address": "00471 Neoma Mount, Suite 250, 35850, New Elishaville, Mississippi, United States",
                                        "date": "07.04.2021",
                                        "id": "7g8df7gd89f7d98f",
                                        "name": "00471 Neoma Mount",
                                        "plan": 100000,
                                        "fact": 31445,
                                        "forecast": 90000,
                                        "planComplete": 0.31445
                                    },
                                    {
                                        "address": "00471 Neoma Mount, Suite 250, 35850, New Elishaville, Mississippi, United States",
                                        "date": "07.04.2021",
                                        "id": "7g8df7gd89f7d98f",
                                        "name": "00471 Neoma Mount",
                                        "plan": 100000,
                                        "fact": 31445,
                                        "forecast": 90000,
                                        "planComplete": 1
                                    },
                                    {
                                        "address": "00471 Neoma Mount, Suite 250, 35850, New Elishaville, Mississippi, United States",
                                        "date": "07.04.2021",
                                        "id": "7g8df7gd89f7d98f",
                                        "name": "00471 Neoma Mount",
                                        "plan": 100000,
                                        "fact": 31445,
                                        "forecast": 90000,
                                        "planComplete": 2
                                    }
                                ])
                        }),
                        getUser: jest.fn(),
                        getTotalTableMetrics: jest.fn(),
                        getTableMetrics: jest.fn(),
                        getUserChartMetrics: jest.fn(),
                        getProducts: jest.fn(),
                        getProduct: jest.fn(),
                        getProductChartMetrics: jest.fn(),
                    }
                }}>
                    <DepIndicators/>
                </ApiContext.Provider>
            </MemoryRouter>
        )

    }

    const {rerender} = render(<Comp/>);

    await Promise.resolve();
    jest.advanceTimersByTime(2000);
    rerender(<Comp/>)

})


