const reviewModel = require('../models/review.model');
const freelancerModel = require('../models/freelancer.model')
const helper = require('../helpers/functions.helper');

// Get All Reviews
exports.getAllReviews = async (req,res) => {
    try {
        const reviews = await reviewModel.find();
        helper.FilterByLang(req,reviews,res,null);
    } catch (error) {
        res.status(500).json({
            message: 'Get All reviews Error',
            error
        })
    }
}
// Add Review
exports.addReview = async (req,res) => {
    try {
        const review = new reviewModel(req.body);
        const newReview = await review.save();
        // set review id in Freelancer
        await freelancerModel.findByIdAndUpdate(req.body.freelancer,{
            $push: {
                reviews: newReview.id
            }
        });
        res.status(201).json({
            status: 'Success',
            data: {
                newReview
            }
        })
    } catch (error) {
        res.status(400).json(error);
    }
}
exports.updateReview = async (req,res) => {
    try {
        await helper.updateData(req,res,reviewModel,null)
    } catch (error) {
        res.status(500).json({error: error, errorMsg: 'An error occurred while updating data'});
    }
}
exports.getReviewById = async (req,res) => {
    try {
        const review = await reviewModel.findById(req.params.id);
        helper.FilterByLang(req,review,res,null);
    }catch (error) {
        res.status(500).json({
            message: 'getReviewById Error',
            error
        });
    }
}
exports.deleteReviewById = async (req, res) => {
    try {
        const deletedReview = await reviewModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedReview)
    } catch (error) {
        res.status(500).json({
            message: 'deleteReviewById Error',
            error
        })
    }
}
exports.findReviewByFreelancer = async (req, res) => {
    try {
        const reviews = await reviewModel.find({freelancer: req.params.id})
        res.status(200).json({

                reviews

        })
    } catch (error) {
        res.status(500).json({
            message: 'Get All reviews Error',
            error
        })
    }
}
