import http from '@lib/http';

export default {
    list: ({ authToken } = {}) => {
        return http.get('http://api.local/posts.php', {}, { authToken }).then((response) => response.data);
    }
};