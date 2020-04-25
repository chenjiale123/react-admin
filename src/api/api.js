import axios from '../utils/axios'



export const loginIn= (name,password) => axios.post('/login/password',{userName:name,password:password})


