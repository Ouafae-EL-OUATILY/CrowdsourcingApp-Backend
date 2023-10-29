const {object} = require("joi");
module.exports= {
    validateParam: (schema, name) => {
        return (req, res, next) => {
            const result = schema.validate({param: req['params'][name]});
            if (result.error) {
                return res.status(400).json({msg: 'invalid parameter was provided', error: result.error});
            } else {
                next();
            }
        }
    },
    validateBody: (schema) => {
        return async (req, res, next) => {
            console.log(req.body)
            const result = schema.validate(req.body);
            if (result.error) {
                return res.status(400).json({msg: 'Invalid data was provided', error: result.error});
            } else {

                next();
            }
        }
    }
}
