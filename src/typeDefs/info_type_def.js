const { gql } = require('apollo-server');

const accountTypeDefs = gql`
    type Info {
        userId: String!
        balance: Int
        lastChange: String
    }
    
    type Query {
        accountByUserId(userId: String!): Info
    }
`;

module.exports = accountTypeDefs; 
