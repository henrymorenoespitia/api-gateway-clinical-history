//Se llama al typedef (esquema) de cada submodulo
const infoTypeDefs = require('./info_type_def');
const historytypedef = require('./history_type_def');
const usersTypeDefs = require('./users_type_defs');

//Se unen
const schemasArrays = [infoTypeDefs, historytypedef, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 