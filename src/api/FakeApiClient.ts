import users from '../mock/users';
import table from '../mock/table';
import userChart from '../mock/userChart';
import productChart from '../mock/productChart';
import products from "../mock/products";
import departments from "../mock/departments"
import {IApiClient, IChartMetric, IDepartments, IProduct, ITableMetric, IUser} from "../types";

export class FakeApiClient implements IApiClient<string>{

    getDepartments() {
        return new Promise<IDepartments[]>(resolve => {
            setTimeout(()=>{
                resolve(departments)
            }, 500);
        })
    };

    getUsers() {
        return new Promise<IUser[]>(resolve => {
            setTimeout(() => {
                resolve(users)
            }, 500);
        })
    };

    getUser(id: string) {
        return new Promise<IUser>(resolve => {
            setTimeout(() => {
                const user = users.find((item:any) => item.id === id);
                resolve(user!);
            }, 500);
        })
    };

    getTotalTableMetrics(id: string) {
        return new Promise<ITableMetric>(resolve => {
            setTimeout(() => {
                // @ts-ignore
                resolve(table[id].total)
            }, 500);
        })
    };

    getTableMetrics(id: string) {
        return new Promise<ITableMetric[]>(resolve => {
            setTimeout(() => {
                // @ts-ignore
                resolve(table[id].data)
            }, 500);
        })
    };

    getUserChartMetrics(id: string) {
        return new Promise<IChartMetric[]>(resolve => {
            setTimeout(() => {
                // @ts-ignore
                resolve(userChart[id])
            }, 500);
        })
    };

    getProducts() {
        return new Promise<IProduct[]>(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 500);
        })
    };

    getProduct(id: string) {
        return new Promise<IProduct>(resolve => {
            setTimeout(() => {
                //@ts-ignore
                resolve(products.find((item:IProduct) => item.id === id))
            }, 500);
        })
    };

    getProductChartMetrics(id: string) {
        return new Promise<IChartMetric[]>(resolve => {
            setTimeout(() => {
                // @ts-ignore
                resolve(productChart[id])
            }, 500);
        })
    };
}
