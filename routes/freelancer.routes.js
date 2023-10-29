const freelancerController = require('../controllers/freelancer.controller');

const {validateParam,validateBody} = require('../helpers/validate.Body.Param.helper');

const { schemas } = require('../helpers/userValidation.helper');


const express = require('express');
const helper = require("../helpers/filesUpload.helper");
const router = express.Router();



router.route('/').get(freelancerController.getAll)
router.route('/signup').post(validateBody(schemas.freelancerSchema),freelancerController.signUp);
// router.route('/login').post(clientController.login);
router.route('/:id')
    .get(validateParam(schemas.idSchema,'id'),freelancerController.getDataById)
    .patch(helper.uploadSingleFile('/uploads/images','image'),freelancerController.updateData)
    .delete(freelancerController.deleteById)

// Filter By Language
router.route('/lang/:lang').get(freelancerController.getAll)

router.route('/lang/:lang/:id')
    .get(validateParam(schemas.idSchema,'id'),freelancerController.getDataById)


module.exports = router;
