const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const classificationModel = require('./classification.model')
const docModel = require('../models/document.model');


const jobSchema = new mongoose.Schema({
    translations: [{
        language: {
            type: String,
            default: 'en'
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        category: {
            type: String
        },
        subCategory: {
            type: String
        }
    }],
    deadline: {
        type: String
    },
    budget: {
        type: Number,
    },
    jobState: {
        type: String,
        default: "active"
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    pubState: {
      type: String,
      default: 'posted'
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    documentTitle: String,
    document: String,
    linkTitle: String,
    link: String,
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    suggestions: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Suggestion'
    }
    ]
}, {timestamps: true},
);


// Only Get Active Jobs
jobSchema.pre(/^find/, function (next) {
    this.find({objectState: {$eq: 'active'}});
    next();
});

jobSchema.pre(/^find/,function (next){
    this.populate({
        path: 'client',
        select: 'email'
    }).populate({
        path: 'suggestions',
        select: ['translations','author']
    }).populate({
        path: 'tasks'
    });
    next();
})

const Job = mongoose.model('Job', jobSchema);


module.exports = Job;
