var express=require("express");
var router=express.Router();
var db=require("../database");

router.get("/",function(req,res){
    db.query("SELECT * FROM machines",function(err,rows,fields){
        if(err) throw err;
        res.render("Machines/machines",{machines:rows});
    });
});

router.get("/:machine_id",function(req,res){
    db.query("SELECT * FROM machines WHERE id = ? ", [req.params.machine_id] ,function(err,row,field){
        if(err) throw err;
        // this line is quite important and took alot of time to write
        res.render("Machines/show",{machine:row[0]});
    });
});

module.exports=router;