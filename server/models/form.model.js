const mongoose = require('mongoose');

const { Schema } = mongoose;

const formModel = new Schema({
    // questions: {
    //     type: Array,
    //     default: []
    // },
    // answers: {
    //     type: Array,
    //     default: []
    // },

    description: {
        type: String,
        default: ""
    },
    questions: [{
        open: { type: Boolean, default: false },
        questionText: String,
        questionImage: { type: String, default: "" },
        options: [{
            optionText: String,
            optionImage: { type: String, default: "" },
        }],
    }],
    stared: { type: Boolean, default: false },
    formType: { type: String, default: "anonymous" }
}, {
    timestamps: true
})

module.exports = mongoose.model('form', formModel);

