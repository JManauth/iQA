const { AuthenticationError } = require('apollo-server-express');
const { User, Evaluation} = require('../models');
const { signToken } = require('../utils/auth');
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        firstName: String
        lasName: String
        userType: String
        email: String
        password: String
        teamLead: [User]
    }


    type Evaluation {
        _id: ID
        title: String
        AgentName: [User]!
        author: [User]!
        teamleadName: [User]!
        createdAt: String
        empathyAndPassion: Boolean
        empathyAndPassionFeedback: String
        commitment: Boolean
        commitmentFeedback: String
        anticipation: Boolean
        anticipationFeedback: String
        clarity: Boolean
        clarityFeedback: String
        everyCustomerMatters: Boolean
        everyCustyomerMattersFeedback: String
        finalScore: Int
    }

    type Auth {
        token: ID!
        user: User
      }

    type Mutation {
        addUser(username: String!, firstName: String!, lastName: String!, userType; String!, email: String!, password: String!, teamLead: String!): Auth
    }
`;

module.exports = typeDefs;