const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Welcome")
})

router.get('/:id',(req,res)=>{
    res.send("value"+req.usery.name)
})
const l1=[{name:"Elan"},{name:"Shobe"},{name:"DRS"}]

router.param('id',(req,res,next,id)=>{
    req.usery=l1[id]
    next()
})


module.exports=router;

