const QuestionModel = require('../models/question.model');

module.exports = {
    addQuestion: async (req, res) => {
        try {
            const addQuestion = await QuestionModel.create({
                questionTypeId: req.body.questionTypeId,
                questionType: req.body.questionType,
                // categorizeQuestion: [{
                //     categories: req.body.categories,
                //     items: req.body.items,
                //     belongsTo: req.body.belongsTo
                // }],
                categorizeQuestion: req.body.categorizeQuestion,
                clozeQuestion: req.body.clozeQuestion,
                comprehensionQuestion: req.body.comprehensionQuestion,
            });
            return res.status(200).json({
                message: 'Question added successfully',
                status: 200 && "Success",
                data: addQuestion
            })
        }
        catch (err) {
            res.send(err);
            console.log(err);
        }
    },

    qetQuestions: async (req, res) => {
        try {
            const qetQuestions = await QuestionModel.find();
            return res.status(200).json({
                message: 'Question Data List',
                status: 200,
                data: qetQuestions
            })
        }
        catch (err) {
            res.send(err);
            console.log(err);
        }
    }
}