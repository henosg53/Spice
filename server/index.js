//modules
const express = require("express")
const upload = require('express-fileupload')
const path = require('path')
const fs = require('fs')

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(upload())

//models
const db = require('./models')
const {Blogs} = require('./models')

//Routes
const blogRouter = require('./routes/blogs')
const commentRouter = require('./routes/comments')
const admin = require("./routes/admin")
const subscriptionsRouter = require('./routes/subscriptions')


app.use('/blogs',blogRouter)
app.use('/comments',commentRouter)
app.use('/admin',admin)
app.use('/subscriptions',subscriptionsRouter)

//fetch images
app.get('/uploads/:filename',(req,res)=>{
    var options = {
        root : path.join(__dirname+'/uploads/')
        
    }
    var filename = req.params.filename
    res.sendFile(filename,options,(err)=>{
        if(err)
            console.error(err);
        else{
            console.log('file sent')
        }
    })

})

//remove blog by id and delete file related
app.post("/remove/:id",async (req,res)=>{
    const id = req.params.id
    const blog = await Blogs.findOne({
        where: {id:id}
    })
    var filename = blog.img
    var filePath = path.join(__dirname+'/uploads/'+filename)
    console.log(filePath)
    
    fs.unlink(filePath,function (err){
        if(err) return console.log(err)
        console.log('file deleted')
    })

    const result = await Blogs.destroy({
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


//sequelize database connection
db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log('started at port %d',3001)
    }) 

})

