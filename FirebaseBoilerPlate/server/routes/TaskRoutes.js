const express = require("express")
const router = express.Router()
const db = require("../firebase")


router.get("/getTask",async(req,res)=>{

    const tasksRef = db.collection ('tasks');
    let arr = []
    const snapshot = await tasksRef.get();
    snapshot.forEach((doc) => {
        arr = [...arr ,  doc.data()]
      console.log(doc.id, '=>', doc.data());
    });
    

res.status(200).send(arr)
})

router.post("/addTask",async(req,res)=>{

    try{
        const newTask = await db.collection("tasks").doc("task1").set({
            name:req.body.name,
            desc:req.body.desc
        });
        console.log(newTask)
        res.status(200).send(newTask.id)
        
    }
    catch (err){
        console.log("error")
        res.status(500).send(err)

    }
    



})

router.delete("/",async(req,res)=>{

})

module.exports = router;