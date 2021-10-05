const { AuthenticationError } = require('apollo-server-express');
const { User, Evaluation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
          return User.find().populate('userType');
        },
    },

    Mutation: {
        addUser: async (parent, { username, firstName, lastName, userType, email, password, teamLead }) => {
            const user = await User.create({ username, firstName, lastName, userType, email, password, teamLead});
            const token = signToken(user);
            return{ token, user };
        },
    }
}

module.exports = resolvers;