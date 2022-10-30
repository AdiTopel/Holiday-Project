const joi = require('joi');

const validation =  (schema) =>  (reqBody) => 
schema.validate(reqBody, {abortEarly:false});

const loginSchema = joi.object({
    username: joi
        .string()
        .min(3)
        .max(15)
        .required()
        .messages({
            'string.empty':'Username is required',
            'string.min':'Username must be at least 3 letters',
            'string.max':"Username can't be longer than 15 letters",
    }),
    password: joi
        .string()
        .min(6)
        .required()
        .messages({
            'string.empty':'Password is required',
            'string.min':'Password must be at least 6 characters'
    }),
});


const registrationSchema = joi.object({
    username: joi
        .string()
        .alphanum()
        .min(3)
        .max(15)
        .required()
        .messages({
            'string.empty':'Username is required',
            'string.min':'Username must be at least 3 characters',
            'string.max':'Username cannot be more than 15 characters',
        }),
    email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.empty':'Email is required',
            'string.email':'Email must be valid'
        }),
    password: joi
        .string()
        .min(6)
        .required()
        .messages({
            'string.empty':'Password is required',
            'string.min':'Password must have at least 6 characters'
        }),
    verifyPassword: joi
        .ref('password'),
    firstName: joi
        .string()
        .alphanum()
        .min(2)
        .required()
        .messages({
            'string.empty':'Enter your name',
            'string.min':'Your name must have at least 2 characters'
        }),
    lastName: joi
        .string()
        .alphanum()
        .min(2)
        .required()
        .messages({
            'string.empty':'Enter your last name',
            'string.min':'Your last name must have at least 2 characters'
        }),
        
});




exports.validateLogin = validation(loginSchema);
exports.validationRegistration = validation(registrationSchema);

