import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://192.168.0.62:3333/api/'
});

export default api;