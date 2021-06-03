const express= require('express');
const path = require('path')
const data=require('./data/weather.json');
const app=express();
app.set('view engine','hbs');
console.log(data);
app.use(express.static(path.join(__dirname , './public')))
app.get('/',(req,res)=>
{
    res.render('index.hbs',{item:data})
    console.log(data);
    res.render('index.hbs',{allData:data})
})
app.listen(8005,()=>
{
    console.log('listening on 8005');
});
