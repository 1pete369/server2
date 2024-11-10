const express = require('express')

const {todo} = require('../models/todo_model');

const router = express.Router()

router.get('/',(req,res)=>{
    try{
        res.json({ message : "Todo Route"})
    }catch(err){
        res.json({ Error : err})
    }
})

router.get('/get-todos/:id',async (req,res)=>{
    const uid = req.params.id
    try{
     const fetchedTodos = await todo.find({ uid})
     res.json({ todos : fetchedTodos })
    }catch(err){
        res.json({ Error : err})
    }
})

router.post('/create-todo',async (req,res)=>{
    const todoObject = req.body.todo
    console.log(todoObject)
    try{
        const newTodoObject = new todo(todoObject)
        await newTodoObject.save()
        res.json({ message : "Todo Added" , newTodoObject , flag : true  })
    }catch(err){
        console.log("Error creating todo:", err); // Log the error for more details
        res.status(500).json({
            message: "Internal server error",
            error: err.message,
            stack: err.stack
        });
    }
})

router.patch('/check-todo/:id',async (req,res)=>{
    const id=  req.params.id
    const { completed , status } = req.body
    const updateFields = {}
    if (completed!==undefined) updateFields.completed = completed
    if (status !==undefined) updateFields.status = status
    try{
        const todoObject = await todo.findOneAndUpdate({ id }, { $set : updateFields }, { new: true })

        res.json({ todoObject , flag : true})

    }catch(err){
        res.json({ Error : err })
    }
})

router.delete('/delete-todo/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await todo.findOneAndDelete({ id });

        if (response) {
            res.json({ message: "Todo deleted successfully", deleted: true });
        } else {
            res.json({ message: "Todo not found", deleted: false });
        }
    } catch (err) {
        res.json({ Error: err });
    }
});




module.exports = router