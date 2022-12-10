import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {ApiContext} from "../../../App";
import 'regenerator-runtime/runtime';
import {MemoryRouter} from "react-router-dom";
import User from "./index";

test("User test", async () => {
    jest.useFakeTimers()

    const Comp = () => {

        return (
            <MemoryRouter>
                <ApiContext.Provider value={{
                    api: {
                        getEmployees: jest.fn(),
                        getDepartments: jest.fn(),
                        getEmployee: jest.fn().mockImplementation((id:string) => {
                            return Promise.resolve(
                                    {
                                        name: "Emily Stewart",
                                        id: "258d2x2s5s2x6",
                                        position: "Sales Manager",
                                        photo: "https://hemeds.com/wp-content/uploads/2017/05/image-people-01.jpg"
                                    }
                                )
                        }),
                        getTotalTableMetrics: jest.fn().mockImplementation((id:string) => {
                            return Promise.resolve(
                                {
                                    "258d2x2s5s2x6"
                                        :
                                        {
                                            "total"
                                                :
                                                {
                                                    "id"
                                                        :
                                                        "", "name"
                                                        :
                                                        "total", "plan"
                                                        :
                                                        1200000, "fact"
                                                        :
                                                        782779.67, "forecast"
                                                        :
                                                        1090000, "planComplete"
                                                        :
                                                        0.6523163916
                                                }
                                            ,
                                            "data"
                                                :
                                                [{
                                                    "id": "5df4g65d",
                                                    "name": "Golden Compass",
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
                                                }, ]
                                        }
                                }
                            )
                        }),
                        getTableMetrics: jest.fn(),
                        getUserChartMetrics: jest.fn(),
                        getProducts: jest.fn(),
                        getProduct: jest.fn(),
                        getProductChartMetrics: jest.fn(),
                    }
                }}>
                        <User/>
                </ApiContext.Provider>
            </MemoryRouter>
        )
    }

    const {rerender, container} = render(<Comp/>);

    await Promise.resolve();
    jest.advanceTimersByTime(2000);
    rerender(<Comp/>)

    fireEvent.click(screen.getByText('Charts'))
    jest.advanceTimersByTime(2000);
    fireEvent.click(screen.getByText('Table'))

})