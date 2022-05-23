import users from './mock/users';
import table from './mock/table';
import userChart from './mock/userChart';
import productChart from './mock/productChart';
import products from "./mock/products";
import {Product} from "./types";

class Api {
    getEmployees() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(users.employees)
            }, 1000);
        })
    };

    getEmployee(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.findEmployee(id))
            }, 500);
        })
    };

    getTotalTableMetrics(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(table.tableMetrics[id].total)
            }, 1000);
        })
    };

    getProducts() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(products.productMetrics)
            }, 1000);
        })
    };

    getProduct(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(products.productMetrics.filter((item:Product) => item.id === id)[0])
            }, 1000);
        })
    };

    getTableMetrics(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(table.tableMetrics[id].data)
            }, 1000);
        })
    };

    getUserChartMetrics(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(userChart.chartMetrics[id])
            }, 1000);
        })
    };

    getProductChartMetrics(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(productChart.chartMetrics[id])
            }, 1000);
        })
    };

    private findEmployee(id: string) {
        return users.employees.filter(item => item.id === id)[0];
    }
}

export default Api;