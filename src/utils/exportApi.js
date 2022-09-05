import request from '~/utils/request';

const exportApi = {
    getAll: (params) => {
        const url = '/routes/export';
        return request.get(url, { params });
    },
    getTerritory: (params) => {
        const url = '/admin/users';
        return request.get(url, { params });
    },
    getUsersClients: (params) => {
        const url = '/admin/drivers';
        return request.get(url, { params });
    },
    getUsersAdmins: (params) => {
        const url = '/admin/users';
        return request.get(url, { params });
    },
};

export default exportApi;
