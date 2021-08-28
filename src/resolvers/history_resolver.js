const historyResolver = {
    Query: {
        historyByDni: (_, {dni}, { dataSources}) => {            
                return dataSources.clinicalHistoryAPI.historyBydni(dni)
                    },
    },
    Mutation: {
        createhistory: (_, {history}, {dataSources, userIdToken}) => {
            console.log(userIdToken)
            if("True" == userIdToken) 
                return dataSources.clinicalHistoryAPI.createhistory(history)
            else
                return "respuesta no es true"
        }
        
    }
};


module.exports = historyResolver;