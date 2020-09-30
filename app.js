var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var db =require("./database");
var machineRoutes=require("./routes/machines");
var newsRoutes=require("./routes/posts");
var casesRoutes=require("./routes/cases");
var dyesRoutes=require("./routes/dyes");

app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

//Basic routes such as home,about,optical brighteners and contact us
app.get("/",function(req,res){
    db.query("SELECT title,descr FROM posts LIMIT 1",function(err,posts){
        if(err){
            console.log(err);
        }else{
            db.query("SELECT title,descr FROM cases LIMIT 1",function(err,cases){
                res.render("index",{posts:posts,cases:cases});
            })
        }
    })
    
});

app.get("/about",function(req,res){
    res.render("about");
});

app.get("/contact",function(req,res){
    res.render("contact")
});

app.get("/brighteners",function(req,res){
    res.render("optical");
});


app.use("/machines",machineRoutes);
app.use(newsRoutes);
app.use(casesRoutes);
app.use("/dyes",dyesRoutes);

app.listen(8080,function(){
    console.log("App initiated")
});