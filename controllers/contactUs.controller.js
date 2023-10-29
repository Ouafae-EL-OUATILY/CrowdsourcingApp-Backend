const contactUsModel = require('../models/contactUs.model');
const helper = require('../helpers/functions.helper');



exports.getAll = async (req, res) => {
    try {
        const contact = await contactUsModel.find();
        helper.FilterByLang(req,contact,res,null);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.addData = async (req, res) => {
    try {
        const data = new contactUsModel(req.body);
        const instance = await data.save();
        res.status(201).json(instance);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.updateData = async (req, res) => {
    try {
        await helper.updateData(req,res,contactUsModel,null)
    } catch (error) {
        res.status(500).json({error: error, errorMsg: 'An error occurred while updating data'});
    }
}

exports.getDataById = async (req, res) => {
    try {
        const data = await contactUsModel.findById(req.params.id);
        helper.FilterByLang(req,data,res,null);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.deleteById = async (req, res) => {
    try {
        const deletedObject = await contactUsModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedObject)
    } catch (error) {
        res.status(500).json(error)
    }
}
