const {body} = require('express-validator');
const { DateTime } = require('luxon');
const {validationResult} = require('express-validator');

exports.validateId = (req, res, next)=>{
    let id = req.params.id;
    //an objectId is a 24-bit Hex string
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid connection id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
};

exports.validateSignUp = [body('firstName', 'First name cannot be empty').notEmpty().trim().escape(),
body('lastName', 'Last name cannot be empty').notEmpty().trim().escape(),
body('email', 'Email must be a valid email address').isEmail().trim().escape().normalizeEmail().notEmpty(),
body('password', 'Password must be at least 8 characters and at most 64 characters').isLength({min: 8, max:64}).trim().notEmpty()];

exports.validateLogIn = [body('email', 'Email must be a valid email address').isEmail().trim().escape().normalizeEmail().notEmpty(),
body('password', 'Password must be at least 8 characters and at most 64 characters').isLength({min: 8, max:64}).trim().notEmpty()];

exports.validateConnection = [body('topic', 'Topic cannot be empty').notEmpty().trim().escape(),
body('title', 'Title cannot be empty').notEmpty().trim().escape(),
body('details', 'Details cannot be empty').notEmpty().trim().escape(),
body('address', 'Address cannot be empty').notEmpty().trim().escape(),
body('date', 'Date cannot be empty').notEmpty().trim().escape().custom((value, {req}) => {
    {
    let date = req.body.date;
        let dateObj = DateTime.fromFormat(date, "yyyy-MM-dd");
        if(!dateObj.isValid){
            throw new Error('Date is not valid');
        }
        else{
            let dateNow = DateTime.now().toFormat("yyyy-MM-dd");
            if (req.body.date <= dateNow){
                throw new Error('Input Date should be after Present Date');
                }
            else return true;
            }
        }
    }),    
body('startTime', 'Start time cannot be empty').notEmpty().trim().escape().custom((value, {req}) => {
    {
        let startTime = req.body.startTime;
        let timeObj = DateTime.fromFormat(startTime, "HH:mm");
        if(!timeObj.isValid) {
            throw new Error('Start time is not valid');
        }
        else {
            return true;
        }
    }
}),
body('endTime', 'End time cannot be empty').notEmpty().trim().escape().custom((value, {req}) => {
    {
        let endTime = req.body.endTime;
        let timeObj = DateTime.fromFormat(endTime, "HH:mm");
        if(!timeObj.isValid) {
            throw new Error('End time is not valid');
        }
    else {
        if(req.body.endTime <= req.body.startTime) {
            throw new Error('End Time should be after start time')
        }
        else return true;
        }
    }
}),
body('image', 'Image URL cannot be empty').notEmpty().trim()];

exports.validateStatus = [body('status').exists().withMessage('status cannot be empty').if(body('status').exists()).toUpperCase().isIn(['YES', 'NO', 'MAYBE']).withMessage('status can only be Yes, No or Maybe').notEmpty().escape().trim()];

exports.validateResult = (req, res, next) => {
    let errors = validationResult(req);
    if(!errors.isEmpty()) {
        errors.array().forEach(error => {
            req.flash('error', error.msg);
        });
        return res.redirect('back');
    } else {
        return next();
    }
}