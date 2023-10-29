const suggestionModel = require('../models/suggestion.model');
const helper = require('../helpers/functions.helper');
const jobModel = require("../models/job.model");



exports.getAll = async (req, res) => {
    try {
        const suggestion = await suggestionModel.find();
        helper.FilterByLang(req,suggestion,res,null);
    } catch (error) {
        res.status(500).json(error);
    }
}

// exports.answer = async (req, res) => {
//     try {
//         console.log(req.body)
//         console.log(await suggestionModel.findById(req.body.id))
//         await suggestionModel.findByIdAndUpdate(req.body.id,{
//             $push: {
//                transaltions: { textResponse: req.body.textResponse}
//             },
//             $set: {
//                    responder: req.body.responder
//             }
//         });
//         res.status(201).json({
//             message: 'Success'
//         });
//     } catch (error) {
//         res.status(400).json(error);
//     }
// }



exports.addData = async (req, res) => {
    try {
        const data = new suggestionModel(req.body);
        const suggestion = await data.save();
        // set suggestion id in job
        await jobModel.findByIdAndUpdate(req.body.job,{
            $push: {
                suggestions: suggestion.id
            }
        });
        res.status(201).json(suggestion);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.updateData = async (req, res) => {
    try {
        await helper.updateData(req,res,suggestionModel,null)
    } catch (error) {
        res.status(500).json({error: error, errorMsg: 'An error occurred while updating data'});
    }
}

exports.getDataById = async (req, res) => {
    try {
        const data = await suggestionModel.findById(req.params.id);
        helper.FilterByLang(req,data,res,null);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.deleteById = async (req, res) => {
    try {
        const deletedObject = await suggestionModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedObject)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.setAuthorId = (req,res,next)=> {
    req.body.author=req.user.id;
    next();
}

exports.setResponderId = (req,res,next) => {
    req.body.responder = req.user.id;
    next();
}
