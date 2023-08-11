const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionModel = new Schema({
    questionTypeId: {
        type: Number,
        autoIncrement: true,
        default: 1
    },
    questionType: {
        type: String
    },
    categorizeQuestion: {
        categories: {
            type: String
        },
        items: String,
        belongsTo: {
            type: String
        }
    },
    clozeQuestion: {
        cqQues: String,
        cqRes: String
    },
    comprehensionQuestion:{
        compText: String,
        compQuesId: Number,
        compQues: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('question', questionModel);

