const { Schema, model } = require('mongoose');




const evaluationSchema = new Schema(
    {
        title: {
            type: String,
            required: 'You need to title this evaluation!',
            minglength:1,
            trim: true,
        },
        
        agentName: [agent],

        qaName: [qa],
        
        teamleadName:[teamlead],
        
        date: {
            timestamps: true,
        },

        empathyAndPassion: {
            type: Boolean,
        },
        empathyAndPassionFeedback:{
            type: String,
        },
        commitment: {
            type: Boolean, 
        },
        commitmentFeedback: {
            type: String,
        },
        anticipation: {
            type: Boolean,
        },
        anticipationFeedback:{
            type:String,
        },
        clarity:{
            type: Boolean,
        },
        clarityFeedback: {
            type: String,
        },
        everyCustomerMatters: {
            type: Boolean,
        },
        everyCustomerMattersFeedback: {
            type: String, 
        },

    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);

const Evaluation = model('Evaluation', evaluationSchema);

module.exports = Evaluation;