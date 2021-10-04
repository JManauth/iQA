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
        teamLead: [Teamlead]
    }


    type Evaluation {
        _id: ID
        title: String
        AgentName: [Agent]!
        author: [Qa]!
        teamleadName: [Teamlead]!
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
`;

module.exports = typeDefs;