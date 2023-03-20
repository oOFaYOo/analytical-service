import {FakeApiClient} from "./FakeApiClient";
import 'regenerator-runtime/runtime';

it('FakeApiClient class test', async ()=>{
    const api = new FakeApiClient();
    const response1 = await api.getDepartments();
    const response2 = await api.getUsers();
    const response3 = await api.getUser('258d2x2s5s2x6');
    const response4 = await api.getTotalTableMetrics('258d2x2s5s2x6');
    const response5 = await api.getTableMetrics('258d2x2s5s2x6');
    const response6 = await api.getUserChartMetrics('258d2x2s5s2x6');
    const response7 = await api.getProducts();
    const response8 = await api.getProduct('5df4g65d');
    const response9 = await api.getProductChartMetrics('5df4g65d');
})

export {}