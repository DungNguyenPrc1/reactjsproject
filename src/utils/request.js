import axios from 'axios';
import queryString from 'query-string';

const request = axios.create({
    baseURL: 'https://flexioapi.afi.dev/api',
    headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
    withCredentials: true,

    paramsSerializer: (params) => queryString.stringify(params),
});

export default request;
