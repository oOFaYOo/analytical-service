import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

export interface IUser {
    name: string,
    id: string,
    position: string,
    photo: string
}

export interface IDepartments extends ITableMetric {
    address: string,
    date: string,
}

export interface ISlidePanel {
    values: { title: string, url: string, }[],
    initial?: 'open' | 'close',
    total?: boolean,
}

export interface IProduct {
    id: string,
    name: string,
    plan: number,
    fact: number,
    planComplete: number,
    managers: { name: string, id: string }[]
}

export interface ITableMetric {
    id: string,
    name: string,
    plan: number,
    fact: number,
    forecast: number,
    planComplete: number,

    [key: string]: string | number
}

export interface IChartMetric {
    name: string,
    year: string,
    color: string,
    values: string[]
}

export interface IChartComponent {
    labels: string[],
    data: IChartMetric[],
    type: 'line' | 'bar'
}

export interface ISidePanel {
    user: IUser,
    data: ITableMetric | undefined
}

export interface ICell {
    row?: ITableMetric,
    value: number | string,
    width?: number | string,
    position?: 'left' | 'right' | 'center',
    plugin?: (value: number | string, row?: ITableMetric) => ReactJSXElement | string | number,
}

export interface ITitle {
    name: string,
    key: string,
    position?: 'left' | 'right' | 'center',
    width?: number,
    plugin?: (value: number | string, row?: ITableMetric) => ReactJSXElement | string | number
}

export interface ITable {
    titles: ITitle[],
    data: ITableMetric[],
    total?: ITableMetric
}

export interface ITile {
    title: string;
    plan: number;
    fact: number;
    planComplete: number
}

export interface IApiClient<T> {
    getDepartments(): Promise<IDepartments[]>

    getUsers(): Promise<IUser[]>

    getUser(id: T): Promise<IUser>

    getTotalTableMetrics(id: T): Promise<ITableMetric>

    getTableMetrics(id: T): Promise<ITableMetric[]>

    getUserChartMetrics(id: T): Promise<IChartMetric[]>

    getProducts(): Promise<IProduct[]>

    getProduct(id: T): Promise<IProduct>

    getProductChartMetrics(id: T): Promise<IChartMetric[]>
}