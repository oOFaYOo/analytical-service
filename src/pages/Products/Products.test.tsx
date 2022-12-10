import React from "react";
import {render} from "@testing-library/react";
import {ApiContext, FilterContext} from "../../App";
import 'regenerator-runtime/runtime';
import Products from "./index";
import {MemoryRouter} from "react-router-dom";

test("Products test", async () => {
    jest.useFakeTimers()

    const Comp = ({sortFunc = undefined}: { sortFunc?: any }) => {

        return (
            <MemoryRouter>
                <ApiContext.Provider value={{
                    api: {
                        getEmployees: jest.fn(),
                        getDepartments: jest.fn(),
                        getEmployee: jest.fn(),
                        getTotalTableMetrics: jest.fn(),
                        getTableMetrics: jest.fn(),
                        getUserChartMetrics: jest.fn(),
                        getProducts: jest.fn().mockImplementation(() => {
                            return Promise.resolve(
                                [
                                    {
                                        id: "5df4g65d",
                                        name: "Golden Compass",
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
                    <FilterContext.Provider value={{sortFunc: sortFunc, setSortFunc: undefined}}>
                        <Products />
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

})


