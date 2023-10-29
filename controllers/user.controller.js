const userModel = require('../models/user.model');
const authHandler = require("./auth.controller");
const helper = require("../helpers/functions.helper");



exports.getAllUsers = async (req,res) => {
    try {
        const Users = await userModel.find();
        res.status(200).json({
            status: "Success",
            Users
        })
    } catch (error) {
        res.status(404).json(error);
    }
}
exports.getDataById = async (req, res) => {
    try {
        const data = await userModel.findById(req.params.id);
        res.status(200).json({
            status: "Success",
            data
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// for logging in Clients and Freelancers we use the User Controller

exports.login= authHandler.login(userModel);
