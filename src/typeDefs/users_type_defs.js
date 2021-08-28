const { gql } = require('apollo-server');

const usersTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }
    type Data {
        UserId: Int
        dni: String
        Doctor: String
    }
    input CredentialsInput {
        username: String!
        password: String!
    }
    
    type Mutation {
        authenticate(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
        dataToken(tokend: String!): Data
    }
`;

module.exports = usersTypeDefs;