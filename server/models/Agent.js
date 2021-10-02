const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');



const agentSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
            required: true,
            unique: true,
        },
        lastName:{
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },

        teamLead: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Teamlead',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

//hash user password

agentSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
agentSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// use this code to query amount of teamm mates / evaluations
// userSchema.virtual('bookCount').get(function () {
//     return this.savedBooks.length;
// });

const Agent = model('Agent', agentSchema);

module.exports = Agent;