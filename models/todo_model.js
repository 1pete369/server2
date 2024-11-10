const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    id: String,
    uid: String,
    date : String,
    name: String,
    completed: Boolean,
    createdAt: String,
    status: String
});

// Using lowercase 'todo_model' here
const todo = mongoose.model("todo_model", todoSchema);

module.exports = { todo, todoSchema };


// export type Todo = {
//     id: string
//     uid: string
//     date : string
//     name: string
//     completed: boolean
//     createdAt: string
//     status: "completed" | "pending" | "overdue"
//   }