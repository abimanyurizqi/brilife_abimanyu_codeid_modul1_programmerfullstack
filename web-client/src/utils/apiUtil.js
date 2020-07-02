const axios = require('axios');

const commonAxios = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

commonAxios.interceptors.response.use(function (response) {
    const { data } = response;
    if (data.status !== 200) {
        const error = new Error('Unknown error');
        error.data = data.data;
        throw error;
    }
    return data.data;
}, function (error) {
    return Promise.reject(error);
});

export { commonAxios };