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
    productName: string,
    plan: number,
    fact: number,
    forecast: number,
    planComplete: number
}

export interface SidePanel {
    user: User,
    data: TableMetric | undefined
}