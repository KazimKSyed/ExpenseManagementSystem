var express=require('express');
var router=express.Router();
var category=require('../controller/categoryController');
var expense=require('../controller/expenseController');


router.get('/categories',category.getCategories);
router.post('/addCategory',category.addCategories);
router.put('/updateCategory/:categoryName',category.updateCategory);
router.delete('/deleteCategory/:categoryId',category.deleteCategory);

router.get('/expenses',expense.getExpenses);
router.post('/addExpense',expense.addExpense);
router.put('/updateExpense/:expenseId',expense.updateExpense);
router.delete('/deleteExpense/:expenseId',expense.deleteExpense);



module.exports=router;