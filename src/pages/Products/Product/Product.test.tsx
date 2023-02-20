import React from "react";
import {render} from "@testing-library/react";
import {ApiContext} from "../../../App";
import 'regenerator-runtime/runtime';
import {MemoryRouter} from "react-router-dom";
import Product from "./index";

test("Product test", async () => {
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
                        getProducts: jest.fn(),
                        getProduct: jest.fn().mockImplementation((id:string) => {
                            return Promise.resolve(
                                {
                                    id: "5df4g65d",
                                    name: "Golden Compass",
                                    plan: 1000000,
                                    fact: 756300,
                                    planComplete: 0.7563,
                                    managers: [{name: "Emily Stewart 12345678901234567890", id: "258d2x2s5s2x6"},
                                        {name: "Catherine Lester", id: "i8k72nkk3j2m"}]
                                }
                            )
                        }),
                        getProductChartMetrics: jest.fn().mockImplementation((id:string) => {
                            return Promise.resolve(
                                [
                                    {
                                        "name": "Golden Compass",
                                        "year": "2020",
                                        "color": "rgb(220,188,78)",
                                        "values": [
                                            103052,
                                            95132
                                        ]
                                    },
                                ]
                            )
                        }),
                    }
                }}>
                    <Product/>
                </ApiContext.Provider>
            </MemoryRouter>
        )
    }

    const {rerender, container} = render(<Comp/>);

    await Promise.resolve();
    jest.advanceTimersByTime(2000);
    rerender(<Comp/>)

})