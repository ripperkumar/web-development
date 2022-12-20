const express = require('express');
const app = express();
const bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html")
});
app.post("/",function(req,res){
var result = Number(req.body.weight)/(Number(req.body.height)*Number(req.body.height));

  res.send("Your BMI is : " + result);
})
app.listen(3000,function(){console.log("server is listening to port 3000")});
