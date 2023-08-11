const mongoose = require('mongoose');

// const { ObjectId }= mongoose.Schema.Types;
const SchemaObjectId = mongoose.Schema.Types.ObjectId;

const quizCreateModel = new mongoose.Schema({
    quizCreateNo: {
        type: Number
    },
    quizCreateType: {
        type: SchemaObjectId,
        ref: 'quizType'
    },
    categories: {
        type: Array
    },
    item: {
        type: Array
    },
    belongsTo: {
        type: SchemaObjectId,
        ref: 'quizCreate'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('quizCreate', quizCreateModel);

