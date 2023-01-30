const model = require('../models/connection');
const rsvp = require('../models/rsvp');

//send all connections to the user
exports.index = (req, res, next) => {
   // res.send('send all connections');
    model.find()
    .then(connections => {
        let category = [];
    connections.forEach(connection => {
        if(category.findIndex(name => name === connection.topic) == -1) {
            category.push(connection.topic);
        } 
    })
        let data = {connections, category}
        console.log(data);
        res.render('./connection/connections', {data})})
    .catch(err => next(err));

    // let category = [];
    // connections.forEach(connection => {
    //     if(category.findIndex(name => name === connection.topic) == -1) {
    //         category.push(connection.topic);
    //     } 
    // })
    // console.log(category);
    // res.render('./connection/connections', data);
};

//send html form for creating a new connection
exports.new = (req, res) => {
        res.render('./connection/newConnection');
};

//create a new connection
exports.create = (req, res, next) => {
   // res.send('Created a new connection');
    let connection = new model(req.body); //create a new document
    connection.hostName = req.session.user;
    connection.save() //insert the document to the database
    .then(connection => {
        req.flash('success', 'Connection has been created successfully!');
        res.redirect('/connections')
    })
    .catch(err => {
        if(err.name === 'ValidationError') {
            req.flash('error', err.message);
            return res.redirect('back');
        }
        next(err);
    });
};

//send details of connection identified by id
exports.show = (req, res, next) => {
    let id = req.params.id;
    //an objectId is a 24-bit Hex string
    model.findById(id).populate('hostName', 'firstName lastName')
    .then(connection => {
        if(connection){
            console.log(connection);
            let rsvpSize = 0;
            rsvp.find({ConnectionID: req.params.id, status:"YES"})
            .then(rsvpConnections=>{
                if(rsvpConnections) rsvpSize = rsvpConnections.length;
                res.render('./connection/connection', {connection, rsvpSize});
            })
            .catch(err => next(err));
        } else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));
};

//send html form for editing an existing connection
exports.edit = (req, res, next) => {
    let id = req.params.id;
    model.findById(id)
    .then(connection => {
            return res.render('./connection/edit', {connection});
    })
    .catch(err => next(err));
};

//update the connection identified by id
exports.update = (req, res, next) => {
    let connection = req.body;
    let id = req.params.id;

    model.findByIdAndUpdate(id, connection, {useFindAndModify: false, runValidators: true})
    .then(connection => {
            req.flash('success', 'Connection has been updated successfully!');
            return res.redirect('/connections/' + id);
        })
    .catch(err => {
        if(err.name === 'ValidationError') {
            req.flash('error', err.message);
            return res.redirect('back');
        }
        next(err);
    });
};

//delete the story identified by id
exports.delete = (req, res, next) => {
    let id = req.params.id;
    
    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(connection => {
        rsvp.deleteMany({ConnectionID: req.params.id})
            .then(result=>{
                req.flash('success', 'Connection deleted successfully');
                res.redirect('/connections');
            })
            .catch(err => next(err));
    })
    .catch(err => {
        if(err.name === 'ValidationError') {
            req.flash('error', err.message);
            return res.redirect('back');
        }
        next(err);
    });
};

exports.createRSVP = (req, res, next) => {
    let status = req.body.status.toUpperCase();
    rsvp.find({ConnectionID: req.params.id, UserID: req.session.user})
    .then(result => {
        console.log(result)
        if(result.length == 1) {
            result[0].status = status;
            rsvp.findByIdAndUpdate(result[0]._id, result[0], {useFindAndModify: false, runValidators: true})
            .then(rsvpObj=>{
                if(rsvpObj){
                    console.log(result);
                req.flash('success', 'Successfully updated RSVP for this connection');
                res.redirect('/users/profile');
                }
                else{
                    let err = new Error("Unable to update RSVP for the connection");
                    err.status = 404;
                    next(err);
                }
            })
            .catch(err => next(err));
        } else {
            let rsvpObj = new rsvp();
            rsvpObj.status = status;
            rsvpObj.UserID = req.session.user;
            rsvpObj.ConnectionID = req.params.id;
            rsvpObj.save()
            .then(rsvpInfo=>{
                req.flash('success', 'Successfully created RSVP for this connection');
                res.redirect('/users/profile');
            })
            .catch(err => next(err));

        }
    })
    .catch()
}

exports.deleteRSVP = (req, res, next) => {
    rsvp.deleteOne({ConnectionID: req.params.id, UserID: req.session.user})
    .then(rsvpInfo=>{
        if(rsvpInfo)
        {
            req.flash("success", "RSVP deleted successfully");
            res.redirect("/users/profile");
        }
    })
    .catch(err => next(err));
}