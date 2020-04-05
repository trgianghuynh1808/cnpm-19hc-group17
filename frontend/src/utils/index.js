export const isServer = !process.browser;

export const objToQueryString = (params) => Object.keys(params).map(key => key + '=' + params[key]).join('&');
