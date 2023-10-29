const BudgetModel = require('../models/budget.model');
const factory = require("./handlerFactory");


exports.getAllBudgets = factory.getAll(BudgetModel);
exports.getBudget = factory.getOne(BudgetModel);
exports.createBudget = factory.createOne(BudgetModel);
exports.updateBudget = factory.updateOne(BudgetModel);
exports.deleteBudget = factory.deleteOne(BudgetModel);
