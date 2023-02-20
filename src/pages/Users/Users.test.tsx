import React from "react";
import Users from "./index";
import {fireEvent, render, screen} from "@testing-library/react";
import {ApiContext} from "../../App";
import 'regenerator-runtime/runtime';
import {MemoryRouter} from "react-router-dom";

test("Users test", async () => {
    jest.useFakeTimers()

    const Comp = ({sortFunc = undefined}: { sortFunc?: any }) => {

        return (
            <MemoryRouter>
                <ApiContext.Provider value={{
                    api: {
                        getUsers: jest.fn().mockImplementation(() => {
                            return Promise.resolve(
                                [
                                    {
                                        name: "Emily Stewart",
                                        id: "258d2x2s5s2x6",
                                        position: "Sales Manager",
                                        photo: "https://hemeds.com/wp-content/uploads/2017/05/image-people-01.jpg"
                                    }
                                ])
                        }),
                        getDepartments: jest.fn(),
                        getUser: jest.fn(),
                        getTotalTableMetrics: jest.fn(),
                        getTableMetrics: jest.fn(),
                        getUserChartMetrics: jest.fn(),
                        getProducts: jest.fn(),
                        getProduct: jest.fn(),
                        getProductChartMetrics: jest.fn(),
                    }
                }}>
                    <Users/>
                </ApiContext.Provider>
            </MemoryRouter>
        )
    }

    const {rerender, container} = render(<Comp/>);

    await Promise.resolve();
    jest.advanceTimersByTime(2000);
    rerender(<Comp/>)

    const search = screen.getByPlaceholderText('John Doe . . .');
    fireEvent.change(search, {
        target: {
            value: 'Em'
        }
    })

})


