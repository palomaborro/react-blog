const mongoose = require('mongoose');

const PostSchema = new mongoose.Shcema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    postPicture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: [String],
        required: false
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', PostSchema);