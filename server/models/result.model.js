const mongoose = require('mongoose');

const { Schema } = mongoose;

const resultModel = new Schema({
    // userName: {
    //     type: String,
    // },
    // result: {
    //     type: Array,
    //     default: []
    // },
    // attempts: {
    //     type: Number,
    //     default: 0
    // },
    // points: {
    //     type: Number,
    //     default: 0
    // },
    // achived: {
    //     type: String,
    //     default: ''
    // },

    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question'
    },
    userId: {
        type: String
    },
    response: [{
        questionId: String,
        optionId: String,
    }],
}, {
    timestamps: true
})

module.exports = mongoose.model('result', resultModel);

