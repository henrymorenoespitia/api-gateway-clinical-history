const infoResolver = {
    Query: {
        infoByUserId: (_, {dni}, { dataSources}) => {
             
                return dataSources.infoAPI.infoBydni(dni)           
        },
    },
    Mutation: {
        createinfo: (_, {info}, {dataSources, userIdToken}) => {
            if("True" == userIdToken) 
                return dataSources.infoAPI.createinfo(info)
            else
                return "respuesta no es true"
        }
    }
};

module.exports = infoResolver;