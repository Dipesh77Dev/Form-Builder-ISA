const questionController = require('../controller/question.controller');

const express = require('express');
const router = require('express').Router();

router.post('/addQuestion', questionController.addQuestion);
router.get('/getQuestions', questionController.qetQuestions);
// router.get('/getUser/:id', userRegisterController.getUserById);
// router.patch('/updateUser/:id', userRegisterController.updateUserById);
// router.delete('/deleteUser/:id', userRegisterController.deleteUserById);
// router.delete('/deleteUsers', userRegisterController.deleteAllUser);

module.exports = router;