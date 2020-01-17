var expense=require('../model/expense')


exports.getExpenses=(req,res,next)=>{
    expense.find(function(err,expense){

        if(err)
        res.json(err);
        else
        res.json(expense);
    })
};
exports.addExpense=(req,res,next)=>{
    let newExpense=new expense({
        expenseId:req.body.expenseId,
        expenseName:req.body.expenseName,
        amount:req.body.amount,
        created_At:req.body. created_At,
        updated_At:req.body. updated_At

    });
    newExpense.save((err,item)=>{
        if(err){
            res.json(err)
        }else{
            res.json({msg:"expense added Succesfully"});
        }
    })
}

exports.updateExpense=(req,res,next)=>{
    expense.findOneAndUpdate({"expenseId":req.params.expenseId},{
        $set:{
            expenseName:req.body.expenseName,
            amount:req.body.amount,
            created_At:new Date,
            updated_At:new Date
        }
    },
    function(err,result){
        if(err)
        {
            res.json(err)
        }else{
            res.json(result);
        }
    }
    ) 
  
},
exports.deleteExpense=(req,res,next)=>{
    expense.deleteOne({"expenseId":req.params.expenseId},
      
    function(err,result){
        if(err)
        {
            res.json(err)
        }else{
            res.json(result);
        }
    }
    ) 
  
}

