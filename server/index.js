const express = require("express")
const upload = require('express-fileupload')
const path = require('path')

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(upload())

const db = require('./models')

//Routes
const blogRouter = require('./routes/blogs')
const commentRouter = require('./routes/comments')
const admin = require("./routes/admin")
const subscriptionsRouter = require('./routes/subscriptions')


app.use('/blogs',blogRouter)
app.use('/comments',commentRouter)
app.use('/admin',admin)
app.use('/subscriptions',subscriptionsRouter)

app.get('/uploads/:filename',(req,res)=>{
    // var fileUrl = "."+req.url
    // console.log(JSON.stringify(req.params))
    // console.log(__dirname)
    //res.send(fileUrl)
    var options = {
        root : path.join(__dirname+'/uploads/'),
        // filePath: path.join(__dirname+'/uploads/')
    }
    var filename = req.params.filename
    // console.log(options.filePath)
    res.sendFile(filename,options,(err)=>{
        if(err)
            console.error(err);
        else{
            console.log('file sent')
        }
    })

})

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log('started at port %d',3001)
    }) 

})

