const dateController = require('../controllers/date.controller');
// const { schemas } = require('../helpers/validation.helper')
// const {validateParam,validateBody} = require('../helpers/validate.Body.Param.helper');


const express = require('express');
const router = express.Router();

router.route('/')
    .get(dateController.getAll)
    .post(dateController.createOne);

router.route('/:id')
    .get(dateController.getOne)
    .patch(dateController.updateOne)
    .delete(dateController.deleteOne)



module.exports = router;
