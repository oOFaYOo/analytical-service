import axios from "axios";
import {IApiClient} from "../types";

export class ApiClient implements IApiClient<string>{
    getUsers() {
        return axios({
            method: 'get',
            url: '/api/users',
        }).then(result => result.data);
    };

    getDepartments() {
        return axios({
            method: 'get',
            url: '/api/departments',
        }).then(result => result.data);
    };

    getUser(id: string) {
        return axios({
            method: 'get',
            url: `/api/users/${id}`,
        }).then(result => result.data);
    };

    getTotalTableMetrics(id: string) {
        return axios({
            method: 'get',
            url: `/api/users/${id}/total`,
        }).then(result => result.data);
    };

    getTableMetrics(id: string) {
        return axios({
            method: 'get',
            url: `/api/users/${id}/table`,
        }).then(result => result.data);
    };

    getUserChartMetrics(id: string) {
        return axios({
            method: 'get',
            url: `/api/users/${id}/chart`,
        }).then(result => result.data);
    };

    getProducts() {
        return axios({
            method: 'get',
            url: '/api/products',
        }).then(result => result.data);
    };

    getProduct(id: string) {
        return axios({
            method: 'get',
            url: `/api/products/${id}`,
        }).then(result => result.data);
    };

    getProductChartMetrics(id: string) {
        return axios({
            method: 'get',
            url: `/api/products/${id}/chart`,
        }).then(result => result.data);
    };
}