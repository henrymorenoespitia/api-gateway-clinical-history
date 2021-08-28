const usersResolver = {
    Mutation: {
        authenticate: (_, { credentials }, { dataSources }) => dataSources.usersAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) => dataSources.usersAPI.refreshToken(refresh),
        dataToken:function(_, { tokend }, { dataSources})  {console.log("cualquier",tokend);return dataSources.usersAPI.datacollecttoken(tokend)} ,
    }
    
};

module.exports = usersResolver;