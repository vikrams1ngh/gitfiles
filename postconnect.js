var express=require('express');
var fs=require('fs');
var app=express();
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var mysql = require("mysql");
var port=process.env.PORT||8099;
var rollno;
var firstname;
app.listen(port);
console.log("server started at port 8099");
//var rollno;
//var firstname;
var t=Number(rollno);
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "clickpass",
  database:"STUDENTDETAILS"
});

con.connect(function(err){
  if(err){
     console.log('Error connecting to Db');
     return;
  }});
  console.log('Connection established');
app.get('/studentform',function(req,res)
{
   res.writeHead(200,{'Content-Type':'text/html'});
   fs.createReadStream('./studentform.html').pipe(res);
});
app.post('/myform.html',function(req,res)
{
  console.log("vikram");
   rollno=req.body.rollno;
    firstname=req.body.firstname;
  console.log(firstname);
 var x="insert into facebookinfo (id,name) values ('29','"+firstname+"')";
con.query(x,function(err,rows,fields)
  {
     if(err){ console.log("error found");}
     else console.log(rows);

});

  
  

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
  res.end();
    
}
);

