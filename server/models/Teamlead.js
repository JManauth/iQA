const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');



const teamleadSchema = new Schema(
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
        lastName: {
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
    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);

teamleadSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

teamleadSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Teamlead = model('Teamlead', teamleadSchema);

module.exports = Teamlead;