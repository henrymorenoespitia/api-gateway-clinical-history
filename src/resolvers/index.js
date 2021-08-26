const infoResolver = require('./info_resolver');
const historyResolver = require('./history_resolver');
const userResolver = require('./users_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(infoResolver, historyResolver, userResolver);

module.exports = resolvers;