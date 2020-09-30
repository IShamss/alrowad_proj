var express=require("express");
var router =express.Router();
var db=require("../database");


router.get("/news",function(req,res){
    db.query("SELECT * FROM posts",function(err,row,fields){
        if(err) throw err;
        res.render("news",{news:row});
    })
    
})

module.exports=router;