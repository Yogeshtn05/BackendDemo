const express=require('express')
let router=express.Router();

router.get('/',(req,res)=>{
        // res.render("index",{"text":"elango"})
        res.send("HEllo")

})

router.route('/:id').get(((req,res)=>{
    console.log(req.usery)
    res.send("Read Value is "+req.usery.name)
})).post((req,res)=>{
    res.send("Update Value is "+req.params.id)
}).delete((req,res)=>{
    res.send("Delete Value is "+req.params.id)
})

const l=[{name:"elango"},{name:"van"},{name:"D"}]

router.param('id',(req,res,next,id)=>{
    req.usery=l[id]
    next();
})

module.exports=router;