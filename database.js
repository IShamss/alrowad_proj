var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"alrowad"
});
connection.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("DB Connected!");
    }
})

module.exports=connection;