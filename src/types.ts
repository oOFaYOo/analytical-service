import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import React from "react";

export interface NodePath {
    name: string,
    url: string
}

export interface User {
    name: string,
    id: string,
    position: string,
    photo: string
}

export interface TableMetric {
    name: string,
    plan: number,
    fact: number,
    forecast: number,
    planComplete: number
}

export interface SidePanel {
    user: User,
    data: TableMetric | undefined
}

export interface Cell {
    value: number | string,
    width?:number | string,
    position?: 'left' | 'right' | 'center',
    plugin?: (value:number | string) => ReactJSXElement | string | number,
}

export interface Title {
    name: string,
    key: string,
    position?: 'left' | 'right' | 'center',
    width?: number,
    plugin?: (value: number | string) => ReactJSXElement | string | number
}


export interface Table {
    titles: Title[],
    data: any[]
}