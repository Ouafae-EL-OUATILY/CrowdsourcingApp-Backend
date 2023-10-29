const docModel = require('../models/document.model');
const helper = require('../helpers/functions.helper');
const classificationModel = require("../models/classification.model");



exports.getAll = async (req, res) => {
    try {

        const doc = await docModel.find();
        helper.FilterByLang(req,doc,res,null);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.addData = async (req, res) => {
    try {

        const data = new docModel(req.body);
        const instance = await data.save();
        res.status(201).json(instance);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.updateData = async (req, res) => {
    try {
        await helper.updateData(req,res,docModel,null)
    } catch (error) {
        res.status(500).json({error: error, errorMsg: 'An error occurred while updating data'});
    }
}

exports.getDataById = async (req, res) => {
    try {
        const data = await docModel.findById(req.params.id);
        helper.FilterByLang(req,data,res,null);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.deleteById = async (req, res) => {
    try {
        const deletedObject = await docModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedObject)
    } catch (error) {
        res.status(500).json(error)
    }
}
