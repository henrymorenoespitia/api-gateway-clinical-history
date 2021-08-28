const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.users_api_url;
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/token/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({refresh: token})));
        return await this.post(`/token/refresh/`, token);
    }
    async datacollecttoken(tokend) {
        tokend = new Object(JSON.parse(JSON.stringify({token:tokend})));
        let resultado= await this.post(`/token/verify/`, tokend);
        return resultado
    }
}

module.exports = UsersAPI;