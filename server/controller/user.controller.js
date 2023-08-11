const userRegisterModel = require("../models/userRegister.model");

module.exports = {
    addUser: async (req, res) => {
        try {
            const addUser = await userRegisterModel.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                userName: req.body.userName,
                password: req.body.password,
                phoneNo: req.body.phoneNo,
            });
            return res.status(200).json({
                message: "User Registered Successfully",
                status: 200,
                data: addUser
            });
        }
        catch (err) {
            console.log(err);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const getAllUsers = await userRegisterModel.find();
            return res.status(200).json({
                message: "User's List",
                status: 200,
                data: getAllUsers
            });
        }
        catch (err) {
            console.log(err);
        }
    },

    getUserById: async (req, res) => {
        try {
            const getUserById = await userRegisterModel.findById(req.params.id);
            return res.status(200).json({
                message: "User had been got by Id",
                status: 200,
                data: getUserById
            });
        }
        catch (err) {
            console.log(err);
        }
    },

    updateUserById: async (req, res) => {
        try {
            const updateUserById = await userRegisterModel.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json({
                message: "User Updated By Id",
                status: 200,
                data: updateUserById
            });
        }
        catch (err) {
            console.log(err);
        }
    },

    deleteUserById: async (req, res) => {
        try {
            const deleteUserById = await userRegisterModel.findByIdAndRemove(req.params.id);
            return res.status(200).json({
                message: "User Deleted By Id",
                status: 200,
                data: deleteUserById
            });
        }
        catch (err) {
            console.log(err);
        }
    },

    deleteAllUser: async (req, res) => {
        try {
            const deleteAllUser = await userRegisterModel.deleteMany();
            return res.status(200).json({
                message: "All User had been Deleted successfully",
                status: 200,
                data: deleteAllUser
            });
        }
        catch (err) {
            console.log(err);
        }
    },
}