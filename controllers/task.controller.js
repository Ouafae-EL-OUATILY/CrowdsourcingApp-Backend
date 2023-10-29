const taskModel = require('../models/task.model');
const jobModel = require('../models/job.model');



exports.getAllTasks = async (req,res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).json({
            data: {
                tasks
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Get All Tasks Error',
            error
        })
    }
}
// Add Task
exports.addTask = async (req,res) => {
    try {
        const task = new taskModel(req.body);
        const newTask = await task.save();
        // set Task id in job
        await jobModel.findByIdAndUpdate(req.body.job,{
            $push: {
                tasks: newTask.id
            }
        });
        res.status(201).json({
            status: 'Success',
            data: {
                newTask
            }
        })
    } catch (error) {
        res.status(400).json(error);
    }
}
exports.updateTask = async (req,res) => {
    try {
        const task = await taskModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            status: 'success',
            data: {
                data: task
            }
        });
    } catch (error) {
        res.status(500).json({error: error, errorMsg: 'An error occurred while updating data'});
    }
}
exports.getTaskId = async (req,res) => {
    try {
        const task = await taskModel.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                task
            }
        });
    }catch (error) {
        res.status(500).json({
            message: 'getReviewById Error',
            error
        });
    }
}
exports.deleteTaskById = async (req, res) => {
    try {
        const deletedTask = await taskModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedTask)
    } catch (error) {
        res.status(500).json({
            message: 'deleteReviewById Error',
            error
        })
    }
}
