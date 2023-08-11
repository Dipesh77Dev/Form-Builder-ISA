const userRegisterController = require('../controller/user.controller');

const express = require('express');
const router = require('express').Router();

router.post('/addUser', userRegisterController.addUser);
router.get('/getUsers', userRegisterController.getAllUsers);
router.get('/getUser/:id', userRegisterController.getUserById);
router.patch('/updateUser/:id', userRegisterController.updateUserById);
router.delete('/deleteUser/:id', userRegisterController.deleteUserById);
router.delete('/deleteUsers', userRegisterController.deleteAllUser);

module.exports = router;