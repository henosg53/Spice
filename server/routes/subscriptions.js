//subscription route
const express = require('express')
const router = express.Router()
const {Subscriptions} = require('../models')


//fetch subscriptions
router.get('/',async(req,res)=>{
    const listOfMail = await Subscriptions.findAll()
    res.json(listOfMail)
})

//create subscription
router.post('/',async(req,res)=>{
    const subscription = req.body
    await Subscriptions.create(subscription)
    res.json(subscription)

})


module.exports = router