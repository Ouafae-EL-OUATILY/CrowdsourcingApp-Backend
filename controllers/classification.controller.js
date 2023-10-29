const classificationModel = require('../models/classification.model');
const helper = require('../helpers/functions.helper');
const factory = require("./handlerFactory");


// exports.getAll = async (req, res) => {
//     try {
//         const classifications = await classificationModel.find();
//         helper.FilterByLang(req,classifications,res,null);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// }
exports.getAllclassifications = factory.getAll(classificationModel)



exports.addData = async (req, res) => {
    try {
        const data = new classificationModel(req.body);
        const instance = await data.save();
        res.status(201).json(instance);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.updateData = async (req, res) => {
    try {
    await helper.updateData(req,res,classificationModel,null)
    } catch (error) {
        res.status(500).json({error: error, errorMsg: 'An error occurred while updating data'});
    }
}

exports.getDataById = async (req, res) => {
    try {
        const data = await classificationModel.findById(req.params.id);
        helper.FilterByLang(req,data,res,null);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.deleteById = async (req, res) => {
    try {
        const deletedObject = await classificationModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedObject)
    } catch (error) {
        res.status(500).json(error)
    }
}
