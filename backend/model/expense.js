const mongoose=require('mongoose')
const expenseSchema=mongoose.Schema({
    expenseId:{
        type:String,
        required:true
    },
    expenseName:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    created_At:{
        type:Date,
       // required:true,
        default:Date.now
    },
    updated_At:{
        type:Date,
     //   required:true,
        default:Date.now
    },
});

const expense=mongoose.model('expense',expenseSchema);
module.exports=expense;