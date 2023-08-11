const quizCreateController = require('../controller/quizCreate.controller');

const express = require('express');
const router = require('express').Router();

router.post('/addQuizCreate', quizCreateController.addQuizCreate);
router.patch('/updateQuizCreate', quizCreateController.updateQuizCreate);


module.exports = router;