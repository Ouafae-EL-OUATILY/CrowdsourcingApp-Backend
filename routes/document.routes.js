const docController = require('../controllers/document.controller');
const {validateParam,validateBody} = require('../helpers/validate.Body.Param.helper');
const helper = require('../helpers/filesUpload.helper')


const express = require('express');
const router = express.Router();


router.route('/').get(docController.getAll).post(helper.uploadSingleFile('/uploads/documents','file'),docController.addData);



module.exports = router
