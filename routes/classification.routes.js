const classificationController = require('../controllers/classification.controller');
const {  schemas } = require('../helpers/validation.helper');
const {validateParam,validateBody} = require('../helpers/validate.Body.Param.helper');

const express = require('express');
const router = express.Router();


router.route('/')
    .get(classificationController.getAllclassifications)
    .post(validateBody(schemas.classificationSchema),classificationController.addData);


router.route('/:id')
    .get(validateParam(schemas.idSchema,'id'),classificationController.getDataById)
    .patch([validateParam(schemas.idSchema,'id'),validateBody(schemas.classificationOptionalSchema)],classificationController.updateData)
    .delete(classificationController.deleteById)

// Filter By Language
router.route('/lang/:lang')
    .get(classificationController.getAllclassifications)

router.route('/lang/:lang/:id')
    .get(validateParam(schemas.idSchema,'id'),classificationController.getDataById)



module.exports = router;
