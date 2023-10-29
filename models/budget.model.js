const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    amount: {
        type: Number,
        min: 0
    }
});


const Budget = mongoose.model('Budget',budgetSchema);



module.exports = Budget;
