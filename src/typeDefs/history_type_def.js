const { gql } = require('apollo-server');

const historyTypeDefs = gql`
    type ClinicalHistoryAppointment {
        userId: String
        dni: String
        diagnostic:String
        treatment : String
        nameDoctor: String
    }
    type ClinicalHistory {
        userId: String
        dni: String
        diagnostic:String
        treatment : String
        nameDoctor: String
        time: String
    }
    input History{
        userId: String
        dni: String
        diagnostic:String
        treatment : String
        nameDoctor: String
    } 
    
    extend type Query {
        historyByDni(dni: String!): [ClinicalHistoryAppointment]
    }
    type Mutation {
        createhistory(history: History!): ClinicalHistory
        
    }
   
`;



module.exports = historyTypeDefs; 
