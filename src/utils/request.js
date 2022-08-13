import axios from 'axios';

const request = axios.create({
    baseURL: 'https://flexioapi.afi.dev/api',
});

export default request;
