const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const {number} = require("joi");

// Will be used next

const taskSchema = new mongoose.Schema({
        title: {
            type: String
        },
        description: {
            type: String
        },
    order: {
      type: Number,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    budget: {
        type: Number,
        min: 0
    },
    objectState: {
        type: String,
        default: "active"
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job'
    }
})


taskSchema.pre(/^find/, function (next) {
    this.find({objectState: {$eq: 'active'}});
    next();
});


const Task = mongoose.model('Task', taskSchema);


module.exports = Task;
