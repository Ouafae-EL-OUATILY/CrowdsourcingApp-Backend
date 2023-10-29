const jobModel = require('../models/job.model');
const helper = require('../helpers/functions.helper');
const userModel = require('../models/client.model');


exports.getAllJobs = async (req,res)=> {
    try {
        const jobs = await jobModel.find();
        helper.FilterByLang(req,jobs,res,null);
    } catch (error) {
        res.status(404).json(error);
    }
}

// Add Job
exports.addJob = async (req,res) => {
    try {
        const dataInstance = new jobModel(req.body);
        const job = await dataInstance.save();
        // set job id in the client
        await userModel.findByIdAndUpdate(req.body.client,{
            $push: {
                Jobs: job.id
            }
        });
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({
            message: "Error",
            error
        });
    }
}
exports.getJobById =  async (req, res) => {
    try {
        const Id = req.params.id;
        const job = await jobModel.findById(Id)
        helper.FilterByLang(req,job, res, null)

    } catch (error) {
        res.status(500).json(error);
    }
}
// exports.updateJobById = async (req, res) => {
//     try {
//         await helper.updateData(req, res, jobModel, null)
//     } catch (error) {
//         res.status(500).json({ error: error, errorMsg: 'An error occurred while updating data' });
//     }
// }
exports.updateJobById = async (req,res) => {
    try {
        const job = await jobModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            status: 'Success',
            data: {
                job
            }
        })
    } catch (error) {
        res.status(400).json({
            message: 'Update Error',
            error
        })
    }
}
exports.deleteJobById = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deletedObject = await  jobModel.findByIdAndDelete(Id);
        // set job id in the client
        await userModel.findByIdAndUpdate(req.body.client,{
            $pull: {
                Jobs: {_id: Id}
            }
        });
        // const deletedObject = await jobModel.updateOne( {_id : Id} , {objectState : 'archive'}  , {new : true})
        res.status(200).json(deletedObject)
    } catch (error) {
        res.status(500).json(error)
    }
}

// get Jobs By user id
exports.getJobsByClientId = async (req,res,next)=> {
    try {
        const jobs = await jobModel.find({client: req.params.id});
        helper.FilterByLang(req, jobs, res, null);
    } catch (error) {
        res.status(404).json(error);
    }
}
