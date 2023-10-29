const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {log} = require("debug");
const {promisify} = require("util");


exports.createUser = Model => async (req,res,next) => {
    try {
        const newUser = await Model.create(req.body);
        res.status(201).json({
            status: 'New User Created',
            newUser
        })
    } catch (error) {
        res.status(500).json(
            {
                message: "Create User Error",
                errorMessage: error.message
            }
        );
    }
}
exports.login = Model => async (req,res,next) => {
    try {
        const { email , password }= req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: 'Please Enter Email And Password'
            });
        }
        const user = await Model.findOne( {email: req.body.email});
        if ( !user || !await bcrypt.compare(password,user.password) ){
            return res.status(401).json({
                message: 'Incorrect email or password'
            });
        }
       const token = jwt.sign({email: user.email,userId: user._id},
           process.env.JWT_SECRET,
           {expiresIn: '10h'}
       );
        res.status(200).json({
            message: "Logged In Successfully",
            token,
            user
        })
    } catch (error) {
      res.status(500).json(error);
    }
}

// Protect Route
exports.protect = async (req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // jwt.verify(token,process.env.JWT_SECRET);
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        res.locals.id=user.id;
        res.locals.role = user.role;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Protected Route Please Login",
            error
        });
    }
}
// restrict route
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        // Roles is an Array
        if (!roles.includes(res.locals.role)) {
            res.status(403).json({
                message: "You dont have Permission'",
            });
        }
        else next();
    };
};
