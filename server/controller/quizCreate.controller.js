const quizCreateModel = require("../models/quizType.model");

module.exports = {
    addQuizCreate: async (req, res) => {
        try {
            const addQuizCreate = await quizCreateModel.create({
                quizCreateNo: req.body.quizCreateNo,
                quizCreateType: req.body.quizCreateType,
                categories: req.body.categories,
                item: req.body.item,
                belongsTo: req.body.belongsTo,
            });
            return res.status(200).json({
                message: "Quiz Create Form Added Successfully",
                status: 200,
                data: addQuizCreate
            });
        }
        catch (err) {
            console.log(err);
        }
    },

    updateQuizCreate: async (req, res) => {
        try {
            const updateQuizCreate = await quizCreateModel.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json({
                message: "Quiz Create Form Updated Successfully",
                status: 200,
                data: updateQuizCreate
            });
        }
        catch (err) {
            console.log(err);
        }
    },
  
}