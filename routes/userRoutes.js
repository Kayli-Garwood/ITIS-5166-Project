const express = require('express');
const controller = require('../controller/userController');
const {isGuest, isLoggedIn} = require('../middlewares/auth');
const {logInLimiter} = require('../middlewares/rateLimiters');
const {validateSignUp, validateLogIn, validateResult} = require('../middlewares/validator');

const router = express.Router();

//GET /users/new
router.get('/new', isGuest, controller.new);

//POST /users
router.post('/', isGuest, validateSignUp, validateResult, controller.create);

//GET /users/login
router.get('/login', isGuest, controller.getUserLogin);

//POST /users/login
router.post('/login', logInLimiter, isGuest, validateLogIn, validateResult, controller.login);

//GET /users/profile
router.get('/profile', isLoggedIn, controller.profile);

//GET /users/logout
router.get('/logout', isLoggedIn, controller.logout);

module.exports = router;