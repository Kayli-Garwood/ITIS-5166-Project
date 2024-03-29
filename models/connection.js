const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    topic: {type: String, required: [true, 'Topic is required']},
    title: {type: String, required: [true, 'Title is required']},
    hostName: {type: Schema.Types.ObjectId, ref: 'User'},
    details: {type: String, required: [true, 'Details is required']},
    address: {type: String, required: [true, 'Address is required']},
    date: {type: String, required: [true, 'Date is required']},
    startTime: {type: String, required: [true, 'Start time is required']},
    endTime: {type: String, required: [true, 'End time is required']},
    image: {type: String, required: [true, 'Image URL is required']}
});

module.exports = mongoose.model('Connection', connectionSchema);