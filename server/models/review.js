const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    // can be changed into userName, based on front end design
    userID: {
        type: String,
        required: true
    },
    beverageType:{
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    imageData:{
        data: Buffer, 
        contentType: String},
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('reviewModel', reviewSchema);