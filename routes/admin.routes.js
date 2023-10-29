const adminController = require('../controllers/admin.controller');


const express = require('express');
const router = express.Router();

router.route('/')
    .get(adminController.getAdmins);
router.route('/:id')
    .get(adminController.getDataById)
    .delete(adminController.deleteById);

router.route('/signup').post(
    adminController.signUp);

module.exports = router;
