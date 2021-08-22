const { gql } = require('apollo-server');

const historyTypeDefs = gql`
    type ClinicalHistoryAppointment {
        userId: String
        dni: String
        diagnostic:String
        treatment : String
        nameDoctor: String
    }
    
    extend type Query {
        historyByDni(dni: String!): [ClinicalHistoryAppointment]
    }

`;

 /*   
type Mutation {
    createTransacction(transaction: TransacctionInput!): Transacction
}*/

module.exports = historyTypeDefs; 
