var express=require('express')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')

var app=express();
app.use(bodyParser.json());
var routes=require('./backend/route/route')
app.listen(3000);
console.log("Server connected");

mongoose.connect('mongodb://localhost:27017/expenselist2',{useUnifiedTopology: true ,useNewUrlParser:true});

mongoose.connection.on('connected',()=>{
    console.log("mongoose connected on port 27017")
});

mongoose.connection.on('error',(error)=>{
    console.log(error);
})

app.use('/routes',routes);
