import cookie from 'cookie';

export default {
    getToken(req) {
        const cookies = cookie.parse(req.headers.cookie);
        return cookies.PHPSESSID;
    }
};