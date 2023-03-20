import React from "react";
import 'regenerator-runtime/runtime';

import {render} from "@testing-library/react";

import {ApiContext} from "../../../../App";
import Chart from "./index";

test("Chart test", async () => {
    jest.useFakeTimers()

    const Comp = () => {

        return (
            <ApiContext.Provider value={{
                api: {
                    getUsers: jest.fn(),
                    getDepartments: jest.fn(),
                    getUser: jest.fn(),
                    getTotalTableMetrics: jest.fn(),
                    getTableMetrics: jest.fn(),
                    getUserChartMetrics: jest.fn().mockImplementation((id:string) => {
                        return Promise.resolve(
                            [
                                {
                                    "name": "Golden Compass",
                                    "year": "2020",
                                    "color": "rgb(220,188,78)",
                                    "values": [
                                        103052,
                                        95132,
                                        65452,
                                        78942,
                                        35457,
                                        23141,
                                        36891,
                                        32141,
                                        14782,
                                        35475,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Sirius",
                                    "year": "2020",
                                    "color": "rgb(194,68,108)",
                                    "values": [
                                        23267,
                                        12354,
                                        32344,
                                        7875,
                                        65214,
                                        36541,
                                        47852,
                                        12034,
                                        6547,
                                        32146,
                                        12345,
                                        34100
                                    ]
                                },
                                {
                                    "name": "Blue Fox",
                                    "year": "2020",
                                    "color": "rgb(46,161,182)",
                                    "values": [
                                        32155,
                                        135132,
                                        7895,
                                        32145,
                                        35457,
                                        32144,
                                        10000,
                                        7856,
                                        14782,
                                        4520,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Capricorn",
                                    "year": "2020",
                                    "color": "rgb(112,182,72)",
                                    "values": [
                                        103052,
                                        135132,
                                        65452,
                                        78942,
                                        35457,
                                        23141,
                                        36891,
                                        32141,
                                        14782,
                                        35475,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Cassiopeia",
                                    "year": "2020",
                                    "color": "rgb(175,108,155)",
                                    "values": [
                                        103052,
                                        135132,
                                        65452,
                                        78942,
                                        35457,
                                        23141,
                                        36891,
                                        32141,
                                        14782,
                                        35475,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Horologium",
                                    "year": "2020",
                                    "color": "rgb(39,110,172)",
                                    "values": [
                                        103052,
                                        135132,
                                        65452,
                                        78942,
                                        35457,
                                        23141,
                                        36891,
                                        32141,
                                        14782,
                                        35475,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Aquarius",
                                    "year": "2020",
                                    "color": "rgb(224,209,89)",
                                    "values": [
                                        103052,
                                        95132,
                                        65452,
                                        78942,
                                        35457,
                                        23141,
                                        36891,
                                        32141,
                                        14782,
                                        35475,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Canis Major",
                                    "year": "2020",
                                    "color": "rgb(196,91,104)",
                                    "values": [
                                        23267,
                                        12354,
                                        32344,
                                        7875,
                                        65214,
                                        36541,
                                        47852,
                                        12034,
                                        6547,
                                        32146,
                                        12345,
                                        34100
                                    ]
                                },
                                {
                                    "name": "Eridanus",
                                    "year": "2020",
                                    "color": "rgb(80,203,185)",
                                    "values": [
                                        32155,
                                        135132,
                                        7895,
                                        32145,
                                        35457,
                                        32144,
                                        10000,
                                        7856,
                                        14782,
                                        4520,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Golden Compass",
                                    "year": "2021",
                                    "color": "rgb(220,188,78)",
                                    "values": [
                                        32155,
                                        65132,
                                        7895,
                                        32145,
                                        35457,
                                        32144,
                                        10000,
                                        7856,
                                        14782,
                                        4520,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Sirius",
                                    "year": "2021",
                                    "color": "rgb(194,68,108)",
                                    "values": [
                                        103052,
                                        135132,
                                        65452,
                                        78942,
                                        35457,
                                        23141,
                                        36891,
                                        32141,
                                        14782,
                                        35475,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Blue Fox",
                                    "year": "2021",
                                    "color": "rgb(46,161,182)",
                                    "values": [
                                        23267,
                                        12354,
                                        32344,
                                        7875,
                                        65214,
                                        36541,
                                        47852,
                                        12304,
                                        6547,
                                        32146,
                                        12345,
                                        34100
                                    ]
                                },
                                {
                                    "name": "Capricorn",
                                    "year": "2021",
                                    "color": "rgb(112,182,72)",
                                    "values": [
                                        32155,
                                        135132,
                                        7895,
                                        32145,
                                        35457,
                                        32144,
                                        10000,
                                        7856,
                                        14782,
                                        44520,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Cassiopeia",
                                    "year": "2021",
                                    "color": "rgb(175,108,155)",
                                    "values": [
                                        103052,
                                        135132,
                                        65452,
                                        78942,
                                        35457,
                                        23141,
                                        36891,
                                        32141,
                                        14782,
                                        35475,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Horologium",
                                    "year": "2021",
                                    "color": "rgb(39,110,172)",
                                    "values": [
                                        23267,
                                        12354,
                                        32344,
                                        7875,
                                        65214,
                                        36541,
                                        47852,
                                        12034,
                                        6547,
                                        32146,
                                        12345,
                                        34100
                                    ]
                                },
                                {
                                    "name": "Aquarius",
                                    "year": "2021",
                                    "color": "rgb(224,209,89)",
                                    "values": [
                                        32155,
                                        135132,
                                        7895,
                                        32145,
                                        35457,
                                        32144,
                                        10000,
                                        7856,
                                        14782,
                                        45420,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Canis Major",
                                    "year": "2021",
                                    "color": "rgb(196,91,104)",
                                    "values": [
                                        103052,
                                        135132,
                                        65452,
                                        78942,
                                        35457,
                                        23141,
                                        36891,
                                        32141,
                                        144782,
                                        35475,
                                        41752,
                                        65471
                                    ]
                                },
                                {
                                    "name": "Eridanus",
                                    "year": "2021",
                                    "color": "rgb(80,203,185)",
                                    "values": [
                                        32155,
                                        135132,
                                        7895,
                                        32145,
                                        35457,
                                        32144,
                                        10000,
                                        7856,
                                        14782,
                                        44520,
                                        41752,
                                        65471
                                    ]
                                }
                            ]
                        )
                    }),
                    getProducts: jest.fn(),
                    getProduct: jest.fn(),
                    getProductChartMetrics: jest.fn(),
                }
            }}>
                <Chart id={'258d2x2s5s2x6'} />
            </ApiContext.Provider>
        )

    }

    const {rerender} = render(<Comp/>);

    await Promise.resolve();
    jest.advanceTimersByTime(2000);
    rerender(<Comp/>)
})