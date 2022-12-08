// add in sneaker model here
const mongoose = require('mongoose')

const Schema = mongoose.Schema;


// bcuz a comment is on a sneaker | many comments on a sneakers
const commentSchema = new Schema({
    commentContent: String,
    copOrDrop: String,
    // a comment belongs to a user so lets bring in the userSchema
    user:{type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String,
},
    {
        timestamps: true,
})

const sneakerSchema = new Schema({
    sneakerName: String,
    releaseDate: String,
    sneakerDetails: String,
    sneakerImage: {
        type: String 
    },
    comments: [commentSchema]
})




module.exports = mongoose.model("Sneaker", sneakerSchema)
