
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const InfoAPI = require('./dataSources/info_api');
const HistoryAPI = require('./dataSources/clinical_history_api');
const UsersAPI = require('./dataSources/users_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        clinicalHistoryAPI: new HistoryAPI(),
        usersAPI: new UsersAPI(),
        infoAPI: new InfoAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});