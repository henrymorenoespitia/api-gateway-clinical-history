const infoResolver = {
    Query: {
        infoByUserId: (_, {dni}, { dataSources}) => {
             
                return dataSources.infoAPI.infoBydni(dni)           
        },
    },
    // Mutation: {}
};

module.exports = infoResolver;