const contactUsController = require("../controllers/contactUs.controller");

const express = require('express');
const router = express.Router();


router.route('/')
    .get(contactUsController.getAll)
    .post(contactUsController.addData)

router.route('/:id')
    .get(contactUsController.getDataById)
    .patch(contactUsController.updateData)
    .delete(contactUsController.deleteById)



module.exports= router;
