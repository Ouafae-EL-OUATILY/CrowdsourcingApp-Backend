const budgetController = require("../controllers/budget.controller");

const express = require('express');
const router = express.Router();


router.route('/')
    .get(budgetController.getAllBudgets)
    .post(budgetController.createBudget)

router.route('/:id')
    .get(budgetController.getBudget)
    .patch(budgetController.updateBudget)
    .delete(budgetController.deleteBudget)



module.exports= router;
