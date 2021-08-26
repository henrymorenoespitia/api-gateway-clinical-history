const { gql } = require('apollo-server');

const infoTypeDefs = gql`
    type Info {
        userId: String
        dni: String!
        typeDni: String
        timeBorn: String
        age: String
        occupation: String
        lastChange: String
    }
    
    type Query {
        infoByUserId(dni: String!): [Info]
    }
`;

module.exports = infoTypeDefs; 
