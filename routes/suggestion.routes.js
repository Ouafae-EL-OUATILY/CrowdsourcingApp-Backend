const suggestionController = require('../controllers/suggestion.controller');
const authController = require('../controllers/auth.controller');
const {validateParam,validateBody} = require('../helpers/validate.Body.Param.helper');
const {  schemas } = require('../helpers/jobValidation.helper');


const express = require('express');
const router = express.Router();


router.route('/')
    .get(suggestionController.getAll)
    .post(authController.protect,authController.restrictTo('client','freelancer'),validateBody(schemas.suggestionSchema),suggestionController.addData)


router.route('/:id')
    .get(validateParam(schemas.idSchema,'id'),suggestionController.getDataById)
    .patch(authController.protect,authController.restrictTo('client','freelancer'),suggestionController.setResponderId,suggestionController.updateData)
    .delete(suggestionController.deleteById)


router.route('/lang/:lang')
    .get(suggestionController.getAll)

router.route('/lang/:lang/:id')
    .get(validateParam(schemas.idSchema,'id'),suggestionController.getDataById)


module.exports = router;
