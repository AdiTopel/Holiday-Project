const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {validateLogin, validationRegistration} = require('../utils/validateSchema')
const appErrorHandler = require('../utils/appErrorHandler');



function createToken(user){
   return jwt.sign(({user}), process.env.SECRET);
};


exports.register = async (req,res,next)=>{
    try {
        const {error,value} = validationRegistration(req.body);
        if (error){
            return res.status(400).json(error.details[0])
        };
        const {username, email} = value;
        const registerUser = await User.findOne({username});
        if (registerUser)
            return next(new appErrorHandler('Username already exists', 400));
        const registerEmail = await User.findOne({email});
        if (registerEmail) 
            return next(new appErrorHandler('Email is already registered', 400));

        const newUser = await User.create(value);
        newUser.password = undefined
        newUser.verifyPassword = undefined
        
        const userToken = createToken(newUser);
        res.status(201).json({userToken});
    } catch (error) {
        console.log(error);
        next(new appErrorHandler('Please make sure you filled out all the necessary details', 400))
    }
};


exports.login = async (req, res, next)=>{
    try {
        const {error,value} = validateLogin(req.body);
        if (error){
            return res.status(400).json(error.details[0])
        };
        const { username, password } = value;
        const logingUser = await User.findOne({username});
        if (!logingUser)
            return next(new appErrorHandler("Username doesn't exist", 400))
        if(!(await logingUser.validatePassword(password)))
            return next(new appErrorHandler('Password is incorrect', 400));
        const userToken = createToken(logingUser);
        res.status(401).json({userToken})
    } catch (error) {
        next(new appErrorHandler('Something went wront, please make sure your details are correct.', 401))      
    }
};


exports.authentication = async (req, res, next) => {
    try {
        const {token} = req.body;
        if (!token) return false;
        const decoded =  jwt.verify(token, process.env.SECRET);
        const {user} = decoded;
        if (!user) return next(new appErrorHandler("User wasn't found"), 403)
        user.password = undefined;
        res.status(200).json( user );
    } catch (error) {
        next (new appErrorHandler('Something went wrong, please try again.', 403))
    }
};


