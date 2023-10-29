const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');


router.route('/').get(userController.getAllUsers);
// router.route('/signup').post(authController.createUser);
// router.route('/login').post(authController.login);
router.route('/:id').get(userController.getDataById)
router.route('/login').post(userController.login);


module.exports = router;
