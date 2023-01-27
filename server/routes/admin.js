const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const {Admin} = require('../models')
// router.use(cors())

router.post("/login", async (req,res)=>{
    // console.log(req.body)
    const admin = await Admin.findOne({ where: {username: req.body.username}})
    if(admin){
        const pass_valid = await bcrypt.compare(req.body.password,admin.password)
        if(pass_valid){
            // console.log('work')
            res.json(admin)
        }
        else{
            // console.log("err")
            res.json({error: "incorrect username/password"})
           
        }

    }
    else{
        console.log("err")
        res.json({error: "incorrect username/password"})
        
    }
    
})


router.post("/create", async(req,res)=>{
    const salt = await bcrypt.genSalt(10)
    const admin = {
        username: req.body.username,
        password: await bcrypt.hash( req.body.password, salt)
    }
    await Admin.create(admin)
    //console.log(admin)
    res.json(admin)
})

module.exports = router