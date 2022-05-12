import users from './mock/users';
import table from './mock/table';

class Api {
    getEmployees(){
        return new Promise(resolve => {
            setTimeout(()=>{resolve(users.employees)}, 1000);
        })
    };
    getEmployee(id:string){
        return new Promise(resolve => {
            setTimeout(()=>{resolve(this.findEmployee(id))}, 500);
        })
    };
    getTableMetrics(id:string){
        return new Promise(resolve => {
            setTimeout(()=>{resolve( table.tableMetrics[id])}, 1000);
        })
    };
    private findEmployee(id:string){
        return users.employees.filter(item=>item.id === id)[0];
    }
}

export default Api;