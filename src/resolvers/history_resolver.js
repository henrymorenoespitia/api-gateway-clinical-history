const historyResolver = {
    Query: {
        historyByDni: (_, {dni}, { dataSources}) => {            
                return dataSources.clinicalHistoryAPI.historyBydni(dni)
                    },
    },
    // Mutation: {}
};

module.exports = historyResolver;