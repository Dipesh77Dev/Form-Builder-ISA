const quizTypeModel = require("../models/quizType.model");

module.exports = {
    addQuizType: async (req, res) => {
        try {
            const addQuizType = await quizTypeModel.create({
                quizNo: req.body.quizNo,
                quizType: req.body.quizType
            });
            return res.status(200).json({
                message: "Quiz Type Added Successfully",
                status: 200,
                data: addQuizType
            });
        }
        catch (err) {
            console.log(err);
        }
    },

    updateQuizType: async (req, res) => {
        try {
            const updateQuizType = await quizTypeModel.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json({
                message: "Quiz Type Updated Successfully",
                status: 200,
                data: updateQuizType
            });
        }
        catch (err) {
            console.log(err);
        }
    },
  
}