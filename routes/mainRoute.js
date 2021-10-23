const express = require('express');
const controller = require('../controller/mainController');

const router = express.Router();

//home page
router.get('/', controller.home);

//about page
router.get('/about', controller.about);

//contact page
router.get('/contact', controller.contact);

module.exports = router;