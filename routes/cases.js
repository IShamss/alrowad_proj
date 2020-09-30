var express=require("express");
var router=express.Router();
var db =require("../database");

router.get("/case",function(req,res){
    db.query("SELECT * FROM cases",function(err,rows,fields){
        res.render("cases",{cases:rows});
    })
});

module.exports=router;