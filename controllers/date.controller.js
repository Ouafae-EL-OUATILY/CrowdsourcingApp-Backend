const dateModel = require('../models/date.model');
const handler = require('./handlerFactory');


exports.getAll = handler.getAll(dateModel);
exports.getOne = handler.getOne(dateModel);
exports.createOne = handler.createOne(dateModel);
exports.updateOne = handler.updateOne(dateModel);
exports.deleteOne = handler.deleteOne(dateModel);
