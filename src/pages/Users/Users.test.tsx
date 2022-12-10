import React from "react";
import Users from "./index";
import {fireEvent, render, screen} from "@testing-library/react";
import {ApiContext, FilterContext} from "../../App";
import 'regenerator-runtime/runtime';
import {MemoryRouter} from "react-router-dom";

test("Users test", async () => {
    jest.useFakeTimers()

    const Comp = ({sortFunc = undefined}: { sortFunc?: any }) => {

        return (
            <MemoryRouter>
                <ApiContext.Provider value={{
                    api: {
                        getEmployees: jest.fn().mockImplementation(() => {
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
                        getEmployee: jest.fn(),
                        getTotalTableMetrics: jest.fn(),
                        getTableMetrics: jest.fn(),
                        getUserChartMetrics: jest.fn(),
                        getProducts: jest.fn(),
                        getProduct: jest.fn(),
                        getProductChartMetrics: jest.fn(),
                    }
                }}>
                    <FilterContext.Provider value={{sortFunc: sortFunc, setSortFunc: undefined}}>
                        <Users/>
                    </FilterContext.Provider>
                </ApiContext.Provider>
            </MemoryRouter>
        )
    }

    const {rerender, container} = render(<Comp/>);

    await Promise.resolve();
    jest.advanceTimersByTime(2000);
    rerender(<Comp/>)

    rerender(<Comp sortFunc={(arr: any, key: string) => {
        return [{name: 'name', id: 'id'}]
    }
    }/>)

    const search = screen.getByPlaceholderText('John Doe . . .');
    fireEvent.change(search, {
        target: {
            value: 'Em'
        }
    })

})


