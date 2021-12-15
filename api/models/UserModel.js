const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        minlength: [8, "Password is too short"]
    },
    profilePicture: {
        type: String,
        default: ''
    },
},{
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);