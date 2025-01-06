const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

const l=require('./Routing/Route1.js')

app.use('/user',l)

app.listen(4000)