const { AuthenticationError } = require('apollo-server-express');
const { User, Evaluation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query:{
        
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return{ token, user };
        },
    }
}

module.exports = resolvers;