const path = require('path');

let config = {
    webpack: (config) => {
        config.resolve.alias['~'] = path.resolve(__dirname, 'src/');
        config.resolve.alias['@ui'] = path.resolve(__dirname, '@ui/');
        config.resolve.alias['@lib'] = path.resolve(__dirname, '@lib/');
        return config;
    }
};

module.exports = config;