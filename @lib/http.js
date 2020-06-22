import axios from 'axios';

export default {
    async get(url, data = {}, { authToken } = {}) {
        return await axios.get(url, {
            headers: {
                ...(authToken ? { Authorization: authToken } : {})
            },
            params: data
        });
    },

    async post(url, data = {}, { authToken } = {}) {
        return await axios.post(url, data, {
            headers: {
                ...(authToken ? { Authorization: authToken } : {})
            }
        });
    },

    async patch(url, data = {}, { authToken } = {}) {
        return await axios.patch(url, data, {
            headers: {
                ...(authToken ? { Authorization: authToken } : {})
            }
        });
    },

    async delete(url, data = {}, { authToken } = {}) {
        return await axios.delete(url, {
            headers: {
                ...(authToken ? { Authorization: authToken } : {})
            },
            params: data
        });
    }
};