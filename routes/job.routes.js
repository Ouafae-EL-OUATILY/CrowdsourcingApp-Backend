const jobController = require('../controllers/job.controller');
const authController = require('../controllers/auth.controller');
const helper = require('../helpers/filesUpload.helper')
const {validateParam,validateBody} = require('../helpers/validate.Body.Param.helper');
const {schemas} = require('../helpers/jobValidation.helper')
const express = require('express');
const router = express.Router();

router.route('/')
    .get(jobController.getAllJobs)
    .post(authController.protect,authController.restrictTo('client'),
        helper.uploadSingleFile('/uploads/documents','document'),
        validateBody(schemas.jobSchema),
        jobController.addJob)

router.route('/:id')
    .get(validateParam(schemas.idSchema,'id'),jobController.getJobById)
    .patch([validateParam(schemas.idSchema,'id'),validateBody(schemas.jobOptionalSchema)],jobController.updateJobById)
    .delete(jobController.deleteJobById)

router.route('/myjobs/:id')
    .get(validateParam(schemas.idSchema,'id'),jobController.getJobsByClientId)

//filter By Lang
router.route('/lang/:lang')
    .get(jobController.getAllJobs);

router.route('/lang/:lang/:id')
    .get(validateParam(schemas.idSchema,'id'),jobController.getJobById)



module.exports = router
