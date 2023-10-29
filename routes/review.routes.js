const reviewController = require('../controllers/review.controller');
const { schemas } = require('../helpers/validation.helper')
const {validateParam,validateBody} = require('../helpers/validate.Body.Param.helper');


const express = require('express');
const router = express.Router();

router.route('/')
    .get(reviewController.getAllReviews)
    .post(
        // validateBody(schemas.reviewSchema),
        reviewController.addReview);

router.route('/:id')
    .get(validateParam(schemas.idSchema,'id'),reviewController.getReviewById)
    .patch([validateParam(schemas.idSchema,'id'),validateBody(schemas.reviewOptionalSchema)],reviewController.updateReview)
    .delete(validateParam(schemas.idSchema,'id'),reviewController.deleteReviewById);

router.route('/freelancer/:id').get(reviewController.findReviewByFreelancer)


// Filter By lang
router.route('/lang/:lang')
    .get(reviewController.getAllReviews)

router.route('/lang/:lang/:id')
    .get(validateParam(schemas.idSchema,'id'),reviewController.getReviewById)


module.exports = router;
