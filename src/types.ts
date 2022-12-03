import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

export interface UserType {
    name: string,
    id: string,
    position: string,
    photo: string
}

export interface DepartmentsType extends TableMetricType{
    address:string,
    date:string,
}

export interface SlidePanelType {
    values: {title: string, url: string,}[],
    initial?: 'open' | 'close',
    total?: boolean,
}

export interface ProductType {
    id: string,
    name: string,
    plan: number,
    fact: number,
    planComplete: number,
    managers: {name:string, id:string}[]
}

export interface TableMetricType {
    id:string,
    name: string,
    plan: number,
    fact: number,
    forecast: number,
    planComplete: number,
    [key: string]: string|number
}

export interface TableMetricsType {
    total?: TableMetricType,
    data: TableMetricType[]
}

export interface ChartMetricType {
    name: string,
    year: string,
    color: string,
    values: string[]
}

export interface SidePanelType {
    user: UserType,
    data: TableMetricType | undefined
}

export interface CellType {
    row?:TableMetricType,
    value: number | string,
    width?:number | string,
    position?: 'left' | 'right' | 'center',
    plugin?: (value:number | string, row?:TableMetricType) => ReactJSXElement | string | number,
}

export interface TitleType {
    name: string,
    key: string,
    position?: 'left' | 'right' | 'center',
    width?: number,
    plugin?: (value: number | string, row?:TableMetricType) => ReactJSXElement | string | number
}

export interface TableType {
    titles: TitleType[],
    data: TableMetricType[],
    total?: TableMetricType
}
