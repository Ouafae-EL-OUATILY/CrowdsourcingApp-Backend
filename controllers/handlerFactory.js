const helper = require('../helpers/functions.helper');


exports.getAll = Model => async (req,res,next) => {
    try {
        const docs = await Model.find();
        helper.FilterByLang(req,docs,res,null);
    } catch (error) {
        res.status(500).json({
            message: 'No Documents Found',
            error
        })
    }
}

// exports.getAll = Model => async (req,res,next) => {
//     try {
//         const docs = await Model.find();
//         res.status(200).json({
//             status: 'Success',
//             data: {
//                 docs
//             }
//         })
//     } catch (error) {
//         res.status(404).json({
//             message: 'No Documents Found'
//         })
//     }
// }

exports.getOne = Model => async (req,res,next) => {
    try {
        const doc = await Model.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });
    } catch (error) {
        res.status(404).json({
            message: 'No Documents Found with The provided id'
        })
    }
}
exports.createOne = Model => async (req,res,next) => {
    try {
        const doc = new Model(req.body);
        const instance = await doc.save();
        res.status(201).json({
            status: "success",
            data: {
                instance
            }
        })
    } catch (error) {
            res.status(400).json({
                message: "Could Not Create Doc",
                error
            });
    }
}
exports.updateOne = Model => async (req,res,next) => {
    try {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: 'success',
            data: {
                data: doc
            }
        });
    } catch (error) {
        res.status(404).json({
            message: 'No Document to update Found with The provided id'
        })
    }
}
exports.deleteOne = Model => async (req,res,next) => {
    try {
        const doc = await Model.findByIdAndDelete(req.params.id);
        res.status(204).json({ // 204 = no content
            status: 'Success',
            data: null
        });
    } catch (error) {
        res.status(404).json({
            message: 'No Document to delete Found with The provided id'
        })
    }
}
