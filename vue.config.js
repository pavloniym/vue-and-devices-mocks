module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/vue-and-devices-mocks/' : '/',
    css: {extract: false},
    productionSourceMap: false,
};