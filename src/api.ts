import users from './mock/users.json';
import table from './mock/table.json';
import userChart from './mock/userChart.json';
import productChart from './mock/productChart.json';
import products from "./mock/products.json";
import axios from "axios";

// class Api {
//     getEmployees() {
//         return axios({
//             method: 'get',
//             url: '/api/users',
//         }).then(result => result.data);
//     };
//
//     getEmployee(id: string) {
//         return axios({
//             method: 'get',
//             url: `/api/users/${id}`,
//         }).then(result => result.data);
//     };
//
//     getTotalTableMetrics(id: string) {
//         return axios({
//             method: 'get',
//             url: `/api/users/${id}/total`,
//         }).then(result => result.data);
//     };
//
//     getTableMetrics(id: string) {
//         return axios({
//             method: 'get',
//             url: `/api/users/${id}/table`,
//         }).then(result => result.data);
//     };
//
//     getUserChartMetrics(id: string) {
//         return axios({
//             method: 'get',
//             url: `/api/users/${id}/chart`,
//         }).then(result => result.data);
//     };
//
//     getProducts() {
//         return axios({
//             method: 'get',
//             url: '/api/products',
//         }).then(result => result.data);
//     };
//
//     getProduct(id: string) {
//         return axios({
//             method: 'get',
//             url: `/api/products/${id}`,
//         }).then(result => result.data);
//     };
//
//     getProductChartMetrics(id: string) {
//         return axios({
//             method: 'get',
//             url: `/api/products/${id}/chart`,
//         }).then(result => result.data);
//     };
// }

class Api {
    getEmployees() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(users)
            }, 1000);
        })
    };

    getEmployee(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(resolve(users.find((item:any) => item.id === id)))
            }, 1000);
        })
    };

    getTotalTableMetrics(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                // @ts-ignore
                resolve(table[id].total)
            }, 1000);
        })
    };

    getTableMetrics(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                // @ts-ignore
                resolve(table[id].data)
            }, 1000);
        })
    };

    getUserChartMetrics(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                // @ts-ignore
                resolve(userChart[id])
            }, 1000);
        })
    };

    getProducts() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        })
    };

    getProduct(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(products.find((item:any) => item.id === id))
            }, 1000);
        })
    };

    getProductChartMetrics(id: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                // @ts-ignore
                resolve(productChart[id])
            }, 1000);
        })
    };
}

export default Api;