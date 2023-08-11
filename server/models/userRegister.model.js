const mongoose = require('mongoose');
// const { Schema } = require('mongoose');

const userRegisterModel = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    userName: {
        type: String,
        // required: true,
        maxLength: 10
    },
    password: {
        type: String,
        // required: true
    },
    phoneNo: {
        type: Number
    },
    createdForms: []
    // role: {
    //     type: Boolean,
    //     default: 'user'
    // }
}, {
    timestamps: true
})

module.exports = mongoose.model('userRegister', userRegisterModel);


// const result = mongoose.model('userRegister', userRegisterModel);
// module.exports = result;