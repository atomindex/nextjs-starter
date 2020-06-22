export default {
    signIn: ({ name, password }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    token: '123456789'
                });
            }, 300);
        });
    }
};