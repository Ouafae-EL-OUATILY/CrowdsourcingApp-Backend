const clientModel = require('../models/client.model');
const authHandler = require('./auth.controller');
const helper = require("../helpers/functions.helper");


// Get all Clients
exports.getClients = async (req,res)=> {
    try {
        const users = await clientModel.find();
        helper.FilterByLang(req,users,res,null);

        // res.status(200).json({
        //     message: 'Success',
        //     users
        // })
    } catch (error) {
        res.status(404).json(error);
    }
}

// Add Client
exports.signUp = authHandler.createUser(clientModel);
// login
exports.login= authHandler.login(clientModel);

exports.updateClient = async (req,res) => {
    try {
        const client = await clientModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            status: 'Success',
            data: {
                client
            }
        })

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getDataById = async (req, res) => {
    try {
        const data = await clientModel.findById(req.params.id);
        helper.FilterByLang(req,data,res,null);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.deleteById = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deletedObject = await clientModel.findByIdAndDelete(Id);
        res.status(200).json(deletedObject)
    } catch (error) {
        res.status(500).json(error)
    }
}
