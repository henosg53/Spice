//Blogs route
const express = require('express')
const router = express.Router()
const {Blogs} = require('../models')

//get blogs
router.get("/", async (req,res)=>{
    const listOfBlogs = await Blogs.findAll()
    res.json(listOfBlogs.reverse())
})

//get blog by Id param
router.get("/byId/:id",async (req,res)=>{
    const id = req.params.id
    const blog = await Blogs.findByPk(id)
    
    res.json(blog)
})

//create blog
router.post("/create", async(req,res)=>{
    const blog = req.body
    await Blogs.create(blog)
    res.json(blog)
})

//upload blog and save file
router.post("/upload",async(req,res)=>{
   
    if(req.files){
        let file = req.files.file
        
        let filename = file.name 
        file.mv('./uploads/'+filename,function(err){
            if(err){
                console.log(err)
            }
            else{
                res.json("file uploaded")
            }
        })
        const blog = {title: req.body.title,
                        img: filename,
                        description: req.body.description}
        await Blogs.create(blog)
    }
    
})


module.exports = router