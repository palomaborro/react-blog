const mongoose = require('mongoose');

const EMAIL_PATTERN =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
        lowercase: true,
        match: [EMAIL_PATTERN, "Email is invalid"]
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