const express = require('express')
const router = express.Router()
const {Blogs} = require('../models')

router.get("/", async (req,res)=>{
    const listOfBlogs = await Blogs.findAll()
    // console.log(listOfBlogs)
    res.json(listOfBlogs.reverse())
})

router.get("/byId/:id",async (req,res)=>{
    const id = req.params.id
    const blog = await Blogs.findByPk(id)
    
    res.json(blog)
})

// router.post("/remove/:id",async (req,res)=>{
//     const id = req.params.id

//     const result = await Blogs.destroy({
//         where: {id: id},
//     })
//     console.log(result)
//     if(result){
//         res.json(result)
//     }
//     else{
//         res.json({error: "couldn't delete"})
//     }
   
//     // const blog = await Blogs.findByPk(id)
//     // res.json(blog)
// })


router.post("/create", async(req,res)=>{
    const blog = req.body
    await Blogs.create(blog)
    res.json(blog)
})
router.post("/upload",async(req,res)=>{
   
    if(req.files){
        let file = req.files.file
        // console.log(BLOB(file))
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