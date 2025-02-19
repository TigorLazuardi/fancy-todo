const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const Project = new Schema({
    name: {
        type: String,
        required: [true, "Project must have a name"]
    },
    todos: [{ type: ObjectId, ref: "Todo" }],
    projectOwner: {
        type: ObjectId,
        required: [true, "user ID must be given"],
        ref: "User"
    },
    projectMembers: [{ type: ObjectId, ref: "User" }]
})

module.exports = mongoose.model('Project', Project)