const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');



const evaluationSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        agentName: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            }
        ],

        author: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            }
        ],

        teamleadName: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            }
        ],

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },

        empathyAndPassion: {
            type: Boolean,
            required: true,
        },
        empathyAndPassionFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        commitment: {
            type: Boolean,
            required: true,
        },
        commitmentFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        anticipation: {
            type: Boolean,
            required: true,
        },
        anticipationFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        clarity: {
            type: Boolean,
            required: true,
        },
        clarityFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        everyCustomerMatters: {
            type: Boolean,
            required: true,
        },
        everyCustomerMattersFeedback: {
            type: String,
            required: true,
            trim: true,
        },
        finalScore: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        }

    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);

const Evaluation = model('Evaluation', evaluationSchema);

module.exports = Evaluation;