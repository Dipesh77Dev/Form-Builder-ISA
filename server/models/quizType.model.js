const mongoose = require('mongoose');

const quizTypeModel = new mongoose.Schema({
    quizNo: {
        type: Number
    },
    quizType: {
        type: Array
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('quizType', quizTypeModel);

