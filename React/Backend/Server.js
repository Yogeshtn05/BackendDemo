const express=require('express')
const app=express();

app.set('view engine','ejs');
app.set('views', './view');

const l={
    name:'Elan',
    age:20
}

app.get('/',(req,res)=>{
    res.render('sample.ejs')
})

const user=require('./Routing/Route');  
app.use('/user',user);

app.listen(3000);