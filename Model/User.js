const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 100,
    },
    email: {
        type: String,
        trim: true,

    },
    role: {
        type: String,
        trim: true
    },
    imageUrl: {
        type: String,
        trim: true
    },
    like: {
        type: Number
    },
    imgTitle: {
        type: String
    },
    imgDetail: {
        type: String
    },
    comments: [{
        user: String,
        text: String
    }]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;