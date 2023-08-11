var router = require('express').Router()
const {createForm, getForm, getFormById, deleteForm, editForm, getAllFormsOfUser, allResponses, submitResponse, getResponse} = require('../controller/form.conroller')

router.route("/create").post(createForm)
router.route("/forms").get(getForm)
router.route("/form/:formId").get(getFormById)
router.route("/deleteform/:formId/:userId").delete(deleteForm)
router.route("/editform").put(editForm)
router.route("/getuserforms/:userId").get(getAllFormsOfUser)

router.route("/addresponse").post(submitResponse)
router.route("/responses").get(allResponses)
router.route("/getresponse/:formId").get(getResponse)

module.exports = router;