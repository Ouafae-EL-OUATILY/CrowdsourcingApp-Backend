const taskController = require("../controllers/task.controller");

const express = require('express');
const router = express.Router();


router.route('/')
    .get(taskController.getAllTasks)
    .post(taskController.addTask)

router.route('/:id')
    .get(taskController.getTaskId)
    .patch(taskController.updateTask)
    .delete(taskController.deleteTaskById)



module.exports= router;
