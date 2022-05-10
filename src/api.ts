import users from './mock/users';

const api = {
    getAdmin: () => {
       return new Promise(resolve => {
            setTimeout(()=>{resolve(users.admin)}, 1000);
        })
    },
    getEmployees: () => {
        return new Promise(resolve => {
            setTimeout(()=>{resolve(users.employees)}, 2000);
        })
    }
}

export default api;