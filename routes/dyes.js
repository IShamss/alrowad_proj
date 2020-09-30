var express=require("express");
var router=express.Router();
var db =require("../database");

router.get("/",function(req,res){
    db.query("SELECT * FROM categories",function(err,rows,fields){
        res.render("Dyes/showCat",{categories:rows});
    });
});

router.get("/:id",function(req,res){
    db.query("SELECT series.id AS id,title,application,series.descr FROM series WHERE cat_id = ?",[req.params.id],function(err,rows,fields){
        db.query("SELECT * FROM categories WHERE id = ?;",[req.params.id],function(err,cat){
            res.render("Dyes/showSeries",{series:rows,cat:cat});
        });
        // console.log(rows);
        // notice that here you send 1 object containing all the retrieved data
    })
});

router.get("/series/:series_id",function(req,res){
    db.query("SELECT colors.title , hexa FROM colors WHERE colors.series_id= ?",[req.params.series_id],function(err,rows){
        db.query("SELECT * FROM series WHERE id = ?",[req.params.series_id],function(err,series){
            res.render("Dyes/showColors",{products:rows,series:series});
        })
    })
})

module.exports=router;