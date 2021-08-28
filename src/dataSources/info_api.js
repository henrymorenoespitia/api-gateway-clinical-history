const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class InfoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.clinical_history_url;    
  }

  async infoBydni(dni){
    return await this.get(`/api/v1/patient/info/${dni}`); 
    //api/v1/patient/info/{dni}    
  }

  async createinfo(info){
    info = new Object(JSON.parse(JSON.stringify(info)));
    return await this.post('/api/v1/patient/info', info); 
    //api/v1/patient/info   
  }

  // async updateinfo(info){
  //   info = new Object(JSON.parse(JSON.stringify(info)));
  //   return await this.
  //   ('/api/v1/patient/info', info); 
  //   //api/v1/patient/info   
  // }
}

module.exports = InfoAPI;