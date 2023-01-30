const express = require('express');
const controller = require('../controller/connectionController');
const {isLoggedIn, isHostName, isNotHostName} = require('../middlewares/auth');
const {validateId, validateConnection, validateResult, validateStatus} = require('../middlewares/validator');

const router = express.Router();

//GET /connections: send all connections to the user
router.get('/', controller.index);

//GET /connections/new: send html form for creating a new connection
router.get('/new', isLoggedIn, controller.new);

//POST /connections: create a new connection
router.post('/', isLoggedIn, validateConnection, validateResult, controller.create);

//GET /connections/:id: send details of connection identified by id
router.get('/:id', validateId, controller.show);

//GET /connections/:id/edit: send html form for editing an existing connection
router.get('/:id/edit', validateId, isLoggedIn, isHostName, controller.edit);

//POST /connections/:id/rsvp: creates a new RSVP
router.post('/:id/rsvp', validateId, isLoggedIn, isNotHostName, validateStatus, validateResult, controller.createRSVP);

//POST /connections/:id/rsvpDelete: deletes an RSVP
router.post('/:id/rsvpDelete', isLoggedIn, validateId, isNotHostName, controller.deleteRSVP);

//PUT /connections/:id: update the connection identified by id
router.put('/:id', validateId, validateConnection, validateResult, isLoggedIn, isHostName, controller.update);

//DELETE /connections/:id: delete the story identified by id
router.delete('/:id', validateId, isLoggedIn, isHostName, controller.delete);

module.exports = router;