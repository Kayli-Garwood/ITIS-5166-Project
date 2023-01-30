const model = require('../models/user');
const Connection = require('../models/connection');
const rsvp = require('../models/rsvp');

//get the sign up form
exports.new = (req, res) => {
        return res.render('./user/new');
};

//create a new user
exports.create = (req, res, next) => {
    let user = new model(req.body);
        if(user.email)
            user.email = user.email.toLowerCase();
    user.save()
    .then(user => {
        req.flash('success', 'Registration succeeded!');
        res.redirect('/users/login');
    })
    .catch(err => {
        if(err.name === 'ValidationError'){
            req.flash('error', err.message);
            return res.redirect('back');
        }
        if(err.code === 11000) {
            req.flash('error', 'Email address has been used!');
            return res.redirect('back');
        }
        next(err);
    });
};

//get the login page
exports.getUserLogin = (req, res, next) => {
        return res.render('./user/login');
};

//process login request
exports.login = (req, res, next) => {
    //authenticate user's login request
    let email = req.body.email;
    if(email)
        email = email.toLowerCase();
    let password = req.body.password;

    //get the user that matches the email
    model.findOne({ email: email })
    .then(user => {
        if (user) {
            user.comparePassword(password)
            .then(result=>{
                if(result) {
                    req.session.user = user._id; //store user's id in the session
                    req.session.userName = user.firstName + " " + user.lastName;
                    req.flash('success', 'You have successfully logged in!');
                    res.redirect('/users/profile');
            } else {
                //console.log('wrong password');
                req.flash('error', 'Wrong Password!');
                res.redirect('/users/login');
            }
            })  
        } else {
            req.flash('error', 'Wrong email address!');
           // console.log('wrong email address');
            res.redirect('/users/login');
        }
    })
    .catch(err => next(err));
    
};

//get profile
exports.profile = (req, res, next) => {
    let id = req.session.user;
    Promise.all([model.findById(id), Connection.find({hostName: id})])
    .then(results => {
        const [user, connections] = results;
        rsvp.find({UserID: id}).populate('ConnectionID', Connection)
        .then(rsvpArr=>{
            console.log(rsvpArr);
            res.render('./user/profile', {user, connections, rsvpArr});
        })
        .catch(err=>next(err));
    })
    .catch(err => next(err));
};

//logout the user
exports.logout = (req, res, next) => {
    req.session.destroy(err => {
        if(err)
            return next(err);
        else
            res.redirect('/users/login');
    });
};