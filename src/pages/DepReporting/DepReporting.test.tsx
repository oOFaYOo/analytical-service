import React from "react";
import {render} from "@testing-library/react";
import DepReporting from "./index";
import {ApiContext} from "../../App";
import {MemoryRouter} from "react-router-dom";
import 'regenerator-runtime/runtime';

test("DepReporting test", async () => {
    jest.useFakeTimers()

    const Comp = () => {

        return (
            <MemoryRouter>
                <ApiContext.Provider value={{
                    api: {
                        getEmployees: jest.fn(),
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
                                    }
                                ])
                        }),
                        getEmployee: jest.fn(),
                        getTotalTableMetrics: jest.fn(),
                        getTableMetrics: jest.fn(),
                        getUserChartMetrics: jest.fn(),
                        getProducts: jest.fn(),
                        getProduct: jest.fn(),
                        getProductChartMetrics: jest.fn(),
                    }
                }}>
                    <DepReporting/>
                </ApiContext.Provider>
            </MemoryRouter>
        )

    }

    const {rerender, container} = render(<Comp/>);

    await Promise.resolve();
    jest.advanceTimersByTime(2000);
    rerender(<Comp/>)

})