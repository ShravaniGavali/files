const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/sdp_db", (error) => {
    if(error)
    console.log("MongoDB connection error:", error)
    else
 console.log("MongoDB connection is established")
})

const app=express()



app.get("/greetings", (req, res) => {
    res.status(201).send("HELLOWORLD")
})

app.get("/todos", (req, res) => {
    const newTodo = req.body

    return Promise.resolve()
    .then{() =>
    if(!newTodo.title)
       }

    Todo.create(newTodo)
    .then(data =>{
        res.status(201).json({
            message: "Todo created",
            todo : data

        })
    })






    res.status(200).json({
        todo:{
            some:"task"
        }
    })
})

app.listen(8000, () => {
    console.log("Server is running on port number:8000")
})


