const model = require('../models/connection');

//send all connections to the user
exports.index = (req, res) => {
   // res.send('send all connections');
    let connections = model.find();
    let category = [];
    connections.forEach(connection => {
        if(category.findIndex(name => name === connection.topic) == -1) {
            category.push(connection.topic);
        } 
    })
    console.log(category);
    res.render('./connection/connections', {connections, category});
};

//send html form for creating a new connection
exports.new = (req, res) => {
        res.render('./connection/newConnection');
};

//create a new connection
exports.create = (req, res) => {
   // res.send('Created a new connection');
    let connection = req.body;
    model.save(connection);
    res.redirect('/connections');    
};

//send details of connection identified by id
exports.show = (req, res, next) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection){
        res.render('./connection/connection', {connection});
    } else {
    let err = new Error('Cannot find a connection with id ' + id);
    err.status = 404;
    next(err);
    }
};

//send html form for editing an existing connection
exports.edit = (req, res, next) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection){
        res.render('./connection/edit', {connection});
    } else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
};

//update the connection identified by id
exports.update = (req, res, next) => {
    let connection = req.body;
    let id = req.params.id;

   if (model.updateById(id, connection)) {
        res.redirect('/connections/' + id);
   } else {
    let err = new Error('Cannot find a connection with id ' + id);
    err.status = 404;
    next(err);
   }
};

//delete the story identified by id
exports.delete = (req, res, next) => {
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/connections');
    } else {
    let err = new Error('Cannot find a connection with id ' + id);
    err.status = 404;
    next(err);
    }
};