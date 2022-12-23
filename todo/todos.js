const mongoose = require("mongoose")

const todosSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
})

module.exports = mongoose.model("todo", todosSchema)