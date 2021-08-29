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
    input Informacion{
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
    type Mutation {
        createinfo(info: Informacion!): Info
        
    }
`;

module.exports = infoTypeDefs; 
