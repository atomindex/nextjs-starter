export default {
    list: () => new Promise((resolve) => {
        setTimeout(() => {
            resolve([
            {
                id: 1, title: 'Пост 1'
            }, {
                id: 2, title: 'Пост 2'
            }, {
                id: 3, title: 'Пост 3'
            }, {
                id: 4, title: 'Пост 4'
            }
            ]);
        }, 300)
    })
};