const quizTypeController = require('../controller/quizType.controller');

const express = require('express');
const router = require('express').Router();

router.post('/addQuizType', quizTypeController.addQuizType);
router.patch('/updateQuizType', quizTypeController.updateQuizType);


module.exports = router;