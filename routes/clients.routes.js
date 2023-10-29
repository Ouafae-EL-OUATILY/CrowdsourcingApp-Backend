const clientController = require('../controllers/client.controller');
const {validateParam,validateBody} = require('../helpers/validate.Body.Param.helper');
const { schemas } = require('../helpers/userValidation.helper');
const helper = require('../helpers/filesUpload.helper')


const express = require('express');
const router = express.Router();

router.route('/')
    .get(clientController.getClients);
router.route('/:id').patch(helper.uploadSingleFile('/uploads/images','image'),clientController.updateClient).get(clientController.getDataById)
    .delete(clientController.deleteById);

router.route('/signup').post(
    // helper.uploadSingleFile("/uploads/images",'image'),
    validateBody(schemas.clientSchema),
    clientController.signUp);

module.exports = router;
