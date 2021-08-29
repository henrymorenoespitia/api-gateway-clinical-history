const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class HistoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.clinical_history_url;    
  }

  async historyBydni(dni){
    return await this.get(`api/v1/patient/history/${dni}`); 
    //api/v1/patient/history/{dni}   
  }

  async createhistory(history){
    history = new Object(JSON.parse(JSON.stringify(history)));
    return await this.post(`/api/v1/patient/appointment/new`,history);   
  }
}

module.exports = HistoryAPI;