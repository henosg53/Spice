//Comments route
const express = require('express')
const router = express.Router()
const {Comments} = require('../models')

//fetch comments
router.get('/fetch',async (req,res)=>{
    const listOfComments = await Comments.findAll()
    res.json(listOfComments.reverse())
})

//fetch limited comments 
router.get('/fetchsome',async (req,res)=>{
    const listOfComments = await Comments.findAll({limit: 3})
    res.json(listOfComments.reverse())
})

//create comment
router.post('/create',async(req,res)=>{
    const comment = req.body
    await Comments.create(comment)
    res.json(comment)
})

//remove comment by id param
router.post("/remove/:id",async (req,res)=>{
    const id = req.params.id

    const result = await Comments.destroy({
        where: {id: id},
    })
    console.log(result)
    if(result){
        res.json(result)
    }
    else{
        res.json({error: "couldn't delete"})
    }
})


module.exports = router