const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
    ConnectionID: {type: Schema.Types.ObjectId, ref: 'Connection'},
    UserID: {type: Schema.Types.ObjectId, ref: 'User'},
    status: {type: String, required: [true, 'Status is required']}
});

module.exports = mongoose.model('RSVP', rsvpSchema);
