const  mongoose = require("mongoose")

const day = new mongoose.Schema({
    uid: String,
    date : String,
    dateId : String,
    todos : [{ type: mongoose.Schema.Types.ObjectId, ref: 'todo_model' }],
    dayCompleted : Boolean
})

module.exports =  mongoose.model("day_model",day)