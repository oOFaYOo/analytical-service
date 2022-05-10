import users from './mock/users';

const api = {
    getAdmin: () => {
       return new Promise(resolve => {
            resolve(users.admin);
        })
    },
    getEmployees: () => {
        return new Promise(resolve => {
            setTimeout(()=>{resolve(users.employees)}, 1000);
        })
    }
}

export default api;