import axios from 'axios';

export const serverIns = axios.create({
    baseURL: 'http://127.0.0.1:8080/pizzaexpress/',
    // baseURL: 'http://172.30.229.132:8080/pizzaexpress',
    timeout: 10000,
    headers: { 'X-Custom-Header': '' }
})