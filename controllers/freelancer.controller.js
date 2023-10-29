const freelancerModel = require('../models/freelancer.model');

const authHandler = require('./auth.controller');
const helper = require("../helpers/functions.helper");



exports.getAll = async (req,res)=> {
    try {
        const freelancers = await freelancerModel.find();
        helper.FilterByLang(req,freelancers,res,null);
    } catch (error) {
        res.status(404).json(error);
    }
}
exports.getDataById = async (req, res) => {
    try {
        const data = await freelancerModel.findById(req.params.id);
        helper.FilterByLang(req,data,res,null);
    } catch (error) {
        res.status(500).json(error);
    }
}
// exports.updateData = async (req,res) => {
//     try {
//         await helper.updateData(req, res, freelancerModel, null)
//     } catch (error) {
//         res.status(500).json({ error: error, errorMsg: 'An error occurred while updating data' });
//     }
// }
exports.updateData = async (req,res) => {
    try {
        const freelancer = await freelancerModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            status: 'Success',
            data: {
                freelancer
            }
        })

    } catch (error) {
        res.status(400).json(error)
    }
}
exports.deleteById = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deletedObject = await freelancerModel.findByIdAndDelete(Id);
        res.status(200).json(deletedObject)
    } catch (error) {
        res.status(500).json(error)
    }
}
// Sign up Freelancer
exports.signUp = authHandler.createUser(freelancerModel);
