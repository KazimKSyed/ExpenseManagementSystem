var category=require('../model/category')


exports.getCategories=(req,res,next)=>{
    category.find(function(err,category){

        if(err)
        res.json(err);
        else
        res.json(category);
    })
};
exports.addCategories=(req,res,next)=>{
    let newCategory=new category({
        categoryId:req.body.categoryId,
        categoryName:req.body.categoryName,
        created_At:new Date(),
        updated_At:new Date()

    });
    newCategory.save((err,item)=>{
        if(err){
            res.json(err)
        }else{
            res.json({msg:"category added Succesfully"});
        }
    })
}

exports.updateCategory=(req,res,next)=>{
    category.findOneAndUpdate({"categoryName":req.params.categoryName},{
        $set:{
            categoryId:req.body.categoryId,
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
exports.deleteCategory=(req,res,next)=>{
    category.deleteOne({"categoryId":req.params.categoryId},
      
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

